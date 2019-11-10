const cluster = require('cluster');
const cp = require('child_process');
const cpuCount = require('os').cpus().length;
const children = [];
const marks = {};

if (cluster.isMaster) {
    for (let i = 0; i < cpuCount; ++i) {
        let child;
        children.push(child = cluster.fork());
        marks[child.process.pid] = i;

        child.on('message', ({ buffer, MIME, process }) => {
            children[process].send({
                buffer,
                MIME,
                process,
            });
        });

        child.send({
            buffer: undefined,
            MIME: undefined,
            process: i,
        });
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
        // 创建新的进程
        const child = cluster.fork();
        // 原数组下标
        const index = marks[worker.process.pid];
        // 替换原数组下标里的进程
        children[index] = child;
        // 删除原标记
        delete marks[worker.process.pid];
        // 创建新标记
        marks[child.process.pid] = index;
    });

    cluster.on('listening', function(worker, address) {
        console.log(`A worker with #${worker.id} is now connected to ${address.address}:${address.port}`);
    });
} else {
    require('./server').init();
}
