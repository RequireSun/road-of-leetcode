function recursion(index, result, quiet, array) {
    if (result[index] >= 0) {
        return result[index];
    }
    result[index] = index;

    for (let i = 0, l = array[index].length; i < l; ++i) {
        if (quiet[result[index]] > quiet[recursion(array[index][i], result, quiet, array)]) {
            result[index] = result[array[index][i]];
        }
    }

    return result[index];
}

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    const length = quiet.length;
    const array = [];
    const result = [];

    for (let i = 0; i < length; ++i) {
        array.push([]);
        result.push(-1);
    }

    for (let i = 0, l = richer.length; i < l; ++i) {
        array[richer[i][1]].push(richer[i][0]);
    }

    for (let i = 0; i < length; ++i) {
        recursion(i, result, quiet, array);
    }

    return result;
};
