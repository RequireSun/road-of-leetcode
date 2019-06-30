/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function(num) {
    const strNum = num.toString(2).split('').reverse().join('');
    const l = strNum.length;
    const fib1 = [1];
    const fib2 = [1];

    // 10^9 < 2^30
    for (let i = 1; i < l; ++i) {
        fib1.push(fib1[i - 1] + fib2[i - 1]);
        fib2.push(fib1[i - 1]);
    }

    let result = fib1[l - 1] + fib2[l - 1];

    for (let i = l - 1; i > 0; --i) {
        if ('0' === strNum[i - 1] && '0' === strNum[i]) {
            // 连续两个 0, 意味着中间要少一整段 1xxxxxx 的数字, 从总数中删掉这部分
            result -= fib2[i - 1];
        } else if ('1' === strNum[i - 1] && '1' === strNum[i]) {
            // 连续两个 1, 意味着从此开始后面的数字全都是废话了, 因为这里已经有连 1 了, 之前统计好的就是正确结果了
            break;
        }
    }

    return result;
};
