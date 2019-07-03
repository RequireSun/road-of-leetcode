/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (2 === n) {
        return 1;
    }
    if (3 === n) {
        return 2;
    }

    // 3 的个数
    let count3 = Math.floor(n / 3);
    let value2 = 1;

    if (1 === n % 3) {
        --count3;
        value2 = 4;
    } else if (2 === n % 3) {
        value2 = 2;
    }

    return Math.pow(3, count3) * value2;
};
