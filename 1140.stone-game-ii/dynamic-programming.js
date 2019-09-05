/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const length = piles.length;
    const sums = new Array(length);
    const matrix = new Array(length);

    for (let i = 0; i < length; ++i) {
        matrix[i] = new Array(32);
    }

    sums[length - 1] = piles[length - 1];

    for (let i = length - 2; i >= 0; --i) {
        sums[i] = sums[i + 1] + piles[i];
    }

    return pickMax(0, 1);

    function pickMax(i, M) {
        if (M * 2 >= piles.length - i) {
            return sums[i];
        } else if (matrix[i][M]) {
            return matrix[i][M];
        }

        let min = Number.MAX_SAFE_INTEGER;

        for (let x = 1; x <= 2 * M && i + x < length; ++x) {
            min = Math.min(min, pickMax(i + x, Math.max(x, M)));
        }

        return matrix[i][M] = sums[i] - min;
    }
};