'use script';

const fs = require('fs');
const { promisify } = require('util');
const path = require('path');
const ART = require('art-template');

const pReadDir = promisify(fs.readdir);
const pStat = promisify(fs.stat);
const pReadFile = promisify(fs.readFile);
const pWriteFile = promisify(fs.writeFile);

const PATH_PLAYGROUND = path.join(__dirname, '../playground/');
const PATH_PLAYGROUND_README = path.join(PATH_PLAYGROUND, 'README.md');

let tIndex;

let _p = Promise.resolve();

_p = _p.then(() => pReadFile(path.join(__dirname, 'template/README2Index.art')));

// 编译 html 模板
_p = _p.then((templateContent) => tIndex = ART.compile(templateContent));

// 读取 playground 文件列表
_p = _p.then(() => pReadDir(PATH_PLAYGROUND));

// 读取 playground 以下的所有内容状态
_p = _p.then(files => {
    return Promise.all(files.map(file => {
        const _path = path.join(PATH_PLAYGROUND, file);

        return pStat(_path).then(stat => ({
            path: _path,
            stat,
        }));
    }));
});

// 判断每个目录下是否有 README.md 文件
_p = _p.then(stats => {
    return Promise.all(stats.map(stat => {
        if (stat.path === PATH_PLAYGROUND_README) {
            return {
                path: path.dirname(stat.path),
                README: stat.path,
            };
        } else if (stat.stat.isDirectory()) {
            return Promise.all([
                pStat(path.join(stat.path, 'README.md')).then(() => path.join(stat.path, 'README.md'), () => undefined),
                pStat(path.join(stat.path, 'script.html')).then(() => path.join(stat.path, 'script.html'), () => undefined),
            ]).then(([README, script]) => ({
                path: stat.path,
                README,
                script,
            }));
        }
    }));
});

// 读取源文件
_p = _p.then(files => {
    return files.map((file) => {
        const { README, script } = file;
        const _ps = [];

        if (README) {
            _ps.push(pReadFile(README).then(content => {
                file.contentREADME = content;
            }));
        }

        if (script) {
            _ps.push(pReadFile(script).then(content => {
                file.contentScript = content;
            }));
        }

        return Promise.all(_ps).then(() => file);
    });
});

// 渲染模板
_p = _p.then(files => {
    return Promise.all(files.map(file => {
        file.result = tIndex({
            title: '',
            content: file.contentREADME || '',
            script: file.contentScript || '',
        });

        return file;
    }));
});

// 写结果
_p = _p.then(files => {
    return files.map(file => pWriteFile(path.join(file.path, file.result)));
});
