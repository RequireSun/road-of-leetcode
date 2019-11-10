const http = require('http');
const cpuCount = require('os').cpus().length;

const PORT = 8009;
let id;
let image;
let mime;

exports.init = () => {
    // console.log(`process: #${process.pid} started!`);

    process.on('message', ({ buffer, MIME, process }) => {
        if (buffer) {
            image = Buffer.from(buffer.data);
        }
        mime = MIME;
        id = process;
    });

    http.createServer((req, res) => {
        if ('GET' === req.method) {
            if (/error/.test(req.url)) {
                throw new Error('new Error');
            } else if (image) {
                res.writeHead(200, {
                    'content-type': mime,
                    'response-by': id,
                });
                res.end(image);
            } else {
                res.writeHead(404, {
                    'response-by': id,
                });
                res.end();
            }
        } else {
            const tarProcess = Math.floor(Math.random() * cpuCount);
            const MIME = req.headers['content-type'];
            let buffer = Buffer.alloc(0);

            req.on('data', (chunk) => {
                buffer = Buffer.concat([buffer, chunk]);
            });
            req.on('end', () => {
                process.send({
                    buffer,
                    MIME,
                    process: tarProcess,
                });

                res.writeHead(200, {
                    'content-type': 'text/html'
                });
                res.end(`sendTo: ${tarProcess}`);
            });
        }
    }).listen(PORT);
};
