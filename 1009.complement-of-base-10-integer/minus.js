/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    if (N === 0) {
        return 1;
    }
    let n = 1;
    while (n <= N) {
        n *= 2;
    }
    n -= 1;
    return n - N;
};
