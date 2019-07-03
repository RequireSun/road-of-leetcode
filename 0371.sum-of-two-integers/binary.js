'use strict';

function getSum (a, b) {
    let tmp;
    while (b) {
        tmp = a ^ b;
        b = a & b;
        a = tmp;
        b <<= 1;
    }
    return a;
};
