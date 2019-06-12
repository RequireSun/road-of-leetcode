/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const matches = s.match(/(M*)?(C*M)?(D*)?(C*D)?(C*)?(X*C)?(L*)?(X*L)?(X*)?(I*X)?(V*)?(I*V)?(I*)?/);

    let total = 0;
    if (matches[1]) {
        total += matches[1].length * 1000;
    }
    if (matches[2]) {
        total += 1100 - matches[2].length * 100;
    }
    if (matches[3]) {
        total += matches[3].length * 500;
    }
    if (matches[4]) {
        total += 600 - matches[4].length * 100;
    }
    if (matches[5]) {
        total += matches[5].length * 100;
    }
    if (matches[6]) {
        total += 110 - matches[6].length * 10;
    }
    if (matches[7]) {
        total += matches[7].length * 50;
    }
    if (matches[8]) {
        total += 60 - matches[8].length * 10;
    }
    if (matches[9]) {
        total += matches[9].length * 10;
    }
    if (matches[10]) {
        total += 11 - matches[10].length * 1;
    }
    if (matches[11]) {
        total += matches[11].length * 5;
    }
    if (matches[12]) {
        total += 6 - matches[12].length * 1;
    }
    if (matches[13]) {
        total += matches[13].length * 1;
    }

    return total;
};
