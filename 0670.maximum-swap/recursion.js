/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const strNum = `${num}`;

    if (1 >= strNum.length) {
        return num;
    }

    const max = Math.max(...strNum.split(''));

    if (max === +strNum[0]) {
        return strNum[0] + maximumSwap(strNum.slice(1));
    } else {
        const index = strNum.lastIndexOf(max);
        return max + strNum.slice(1, index) + strNum[0] + strNum.slice(index + 1);
    }
};
