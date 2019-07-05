/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let binary1 = parseInt(num1).toString(2).split('').reverse().join('');
    let binary2 = parseInt(num2).toString(2).split('').reverse().join('');
    let temp;
    let result = [0];

    if (binary1.length < binary2.length) {
        temp = binary1;
        binary1 = binary2;
        binary2 = temp;
    }

    for (let i = 0, l = binary2.length; i < l; ++i) {
        if ('1' === binary2[i]) {
            for (let j = 0, k = binary1.length; j < k; ++j) {
                result[i + j] = (result[i + j] || 0) + +binary1[j];
            }
        }
    }

    let carry = 0;
    let i = 0;
    const l = result.length;

    while (carry || i < l) {
        result[i] = (result[i] || 0) + carry;
        carry = Math.floor(result[i] / 2);
        if (1 < result[i]) {
            result[i] %= 2;
        }
        ++i;
    }

    return `${parseInt(result.reverse().join(''), 2)}`;
};
