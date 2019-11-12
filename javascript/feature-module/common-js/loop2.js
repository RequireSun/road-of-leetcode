exports.b = 2;

const { a, b } = require('./loop1');

exports.a = 2;

console.log(a, b);
