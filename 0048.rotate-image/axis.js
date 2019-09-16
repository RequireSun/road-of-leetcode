function circle(matrix, depth, length) {
    // 减一, 要不然端首会多移动一次
    for (let a = depth, l = length - depth - 1; a < l; ++a) {
        let i = a;
        let j = depth;
        let tempV = matrix[i][j];

        for (let b = 0; b < 4; ++b) {
            i ^= j;
            j ^= i;
            i ^= j;
            j = length - 1 - j;

            matrix[i][j] ^= tempV;
            tempV ^= matrix[i][j];
            matrix[i][j] ^= tempV;
        }
    }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const length = matrix.length;
    let depth = Math.floor(length / 2) - (1 - length % 2);

    while (depth >= 0) {
        circle(matrix, depth, length);
        // 向外一层
        --depth;
    }
};
