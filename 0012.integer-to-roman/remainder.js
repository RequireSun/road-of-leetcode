/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let numM = Math.floor(num / 1000);
    let numC = Math.floor(num % 1000 / 100);
    let numX = Math.floor(num % 100 / 10);
    let numI = num % 10;

    let strM = 'M'.repeat(numM);
    let strC;
    let strX;
    let strI;

    if (9 === numC) {
        strC = 'CM';
    } else if (8 >= numC && 5 <= numC) {
        strC = 'D' + 'C'.repeat(numC - 5);
    } else if (4 === numC) {
        strC = 'CD';
    } else if (3 >= numC) {
        strC = 'C'.repeat(numC);
    }

    if (9 === numX) {
        strX = 'XC';
    } else if (8 >= numX && 5 <= numX) {
        strX = 'L' + 'X'.repeat(numX - 5);
    } else if (4 === numX) {
        strX = 'XL';
    } else if (3 >= numX) {
        strX = 'X'.repeat(numX);
    }

    if (9 === numI) {
        strI = 'IX';
    } else if (8 >= numI && 5 <= numI) {
        strI = 'V' + 'I'.repeat(numI - 5);
    } else if (4 === numI) {
        strI = 'IV';
    } else if (3 >= numI) {
        strI = 'I'.repeat(numI);
    }

    return strM + strC + strX + strI;
};
