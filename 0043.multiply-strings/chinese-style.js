/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let binary1 = num1.split('').reverse();
    let binary2 = num2.split('').reverse();
    let temp = 0;
    const result = [];

    if (binary1.length < binary2.length) {
        temp = binary1;
        binary1 = binary2;
        binary2 = temp;
    }

    temp = 0;

    const l = binary2.length;
    const k = binary1.length;

    for (let i = 0; i < k + l; ++i) {
        result.push(0);
    }

    for (let i = 0; i < l; ++i) {
        if ('0' !== binary2[i]) {
            for (let j = 0; j < k; ++j) {
                result[i + j] = result[i + j] + binary2[i] * binary1[j] + temp;
                temp = Math.floor(result[i + j] / 10);
                result[i + j] = result[i + j] % 10;
            }

            if (temp > 0) {
                result[i + k] = temp;
            }

            temp = 0;
        }
    }

    return result.reverse().join('').replace(/^0+/, '') || '0';
};
