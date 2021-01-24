/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    var length = costs.length;
    var mid = length / 2;
    var total = 0;
    var i = 0;

    for (; i < length; ++i) {
        costs[i][2] = costs[i][0] - costs[i][1];
    }
    costs.sort((a, b) => a[2] - b[2]);

    i = 0;
    while (i < mid) {
        total += costs[i++][0];
    }
    while (i < length) {
        total += costs[i++][1];
    }
    return total;
};
