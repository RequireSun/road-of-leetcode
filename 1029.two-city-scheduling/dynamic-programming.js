/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    var length = (costs.length / 2) + 1, matrix = Array(length), i = 0, j;
    for (; i < length; ++i) {
        matrix[i] = Array(length);
    }
    matrix[0][0] = 0;
    for (i = 1; i < length; ++i) {
        matrix[i][0] = matrix[i - 1][0] + costs[i - 1][0];
        matrix[0][i] = matrix[0][i - 1] + costs[i - 1][1];
    }
    for (i = 1; i < length; ++i) {
        for (j = 1; j < length; ++j) {
            matrix[i][j] = Math.min(matrix[i - 1][j] + costs[i + j - 1][0], matrix[i][j - 1] + costs[i + j - 1][1]);
        }
    }
    return matrix[length - 1][length - 1];
}
