/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function(num) {
    const strNum = num.toString(2).split('').reverse().join('');
    let l = strNum.length;
    const fib = [1, 2];

    for (let i = 2; l > i; ++i) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }

    let result = 0;
    let pre = 0;

    while (0 <= l) {
        if ('1' === strNum[l]) {
            result += fib[l];
            if (pre) {
                return result;
            }
            pre = 1;
        } else {
            pre = 0;
        }
        --l;
    }

    return result + 1;
};
