exports.b = 1;

const { a, b } = require('./loop2');

exports.a = 1;

console.log(a, b);
