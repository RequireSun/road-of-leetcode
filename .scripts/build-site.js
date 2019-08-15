'use script';

const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const pReadDir = promisify(fs.readdir);
const pStat = promisify(fs.stat);
const pReadFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const PATH_PLAYGROUND = path.join(__dirname, '../playground/');
const PATH_PLAYGROUND_README = path.join(PATH_PLAYGROUND, 'README.md');

let _p = pReadDir(PATH_PLAYGROUND);

_p = _p.then(files => {
    return Promise.all(files.map(file => {
        const _path = path.join(PATH_PLAYGROUND, file);

        return pStat(_path).then(stat => ({
            path: _path,
            stat,
        }));
    }));
});

_p = _p.then(stats => {
    return Promise.all(stats.map(stat => {
        if (stat.path === PATH_PLAYGROUND_README) {
            return stat.path;
        } else if (stat.stat.isDirectory()) {
            return pStat(path.join(stat.path, 'README.md')).then(() => path.join(stat.path, 'README.md'), () => undefined);
        }
    }));
});

_p = _p.then(files => {
    console.log(files.filter(file => file));
});
