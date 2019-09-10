/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    const length = quiet.length;
    const matrix = [];

    for (let i = 0; i < length; ++i) {
        matrix.push(new Array(length));
    }

    for (let i = 0, l = richer.length; i < l; ++i) {
        matrix[richer[i][0]][richer[i][1]] = 1;

        for (let j = 0; j < length; ++j) {
            if (matrix[richer[i][1]][j]) {
                matrix[richer[i][0]][j] = 1;
            }

            if (matrix[j][richer[i][0]]) {
                matrix[j][richer[i][1]] = 1;
            }
        }
    }

    const result = [];

    for (let i = 0; i < length; ++i) {
        let mostQuiet = i;

        for (let j = 0; j < length; ++j) {
            if (matrix[j][i] && quiet[j] < quiet[mostQuiet]) {
                mostQuiet = j;
            }
        }

        result.push(mostQuiet);
    }

    return result;
};
