/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const strNum = `${num}`;
    const arrNum = strNum.split('').sort((a, b) => b - a);

    let tarV;
    let tarI;

    for (let i = 0, l = arrNum.length; i < l; ++i) {
        if (arrNum[i] !== strNum[i]) {
            tarV = arrNum[i];
            tarI = i;
            break;
        }
    }

    if (!tarV) {
        return num;
    }

    const index = strNum.lastIndexOf(tarV);

    return strNum.slice(0, tarI) + tarV + strNum.slice(tarI+ 1, index) + strNum[tarI] + strNum.slice(index + 1);
};
