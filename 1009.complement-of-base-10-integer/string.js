/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    let str = N.toString(2);
    let newStr = '';
    for (let i = 0, l = str.length; i < l; ++i) {
        newStr += 1 - str[i];
    }

    return parseInt(newStr, 2);
};
