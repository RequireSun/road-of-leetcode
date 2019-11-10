const cluster = require('cluster');
const cpuCount = require('os').cpus().length;
const children = [];

if (cluster.isMaster) {
    for (let i = 0; i < cpuCount; ++i) {
        let child;
        children.push(child = cluster.fork());

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
    });

    cluster.on('listening', function(worker, address) {
        console.log(`A worker with #${worker.id} is now connected to ${address.address}:${address.port}`);
    });
} else {
    require('./server').init();
}
