/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const length = matrix.length;
    // 按理来说应该是 +1, 但数组下标是从 0 开始的
    const center = (length - 1) / 2;
    let temp;
    let tempV;
    let depth = length % 2 ? Math.floor(length / 2) : Math.floor(length / 2) - 1;

    while (depth >= 0) {
        // 减一, 要不然端首会多移动一次
        let a = depth, l = length - depth - 1;
        for (; a < l; ++a) {
            let i = a;
            let j = depth;
            tempV = matrix[i][j];

            for (let b = 0; b < 4; ++b) {
                let curPosX = i - center;
                let curPosY = j - center;

                let nextPosX = curPosY;
                let nextPosY = -curPosX;

                i = nextPosX + center;
                j = nextPosY + center;

                temp = matrix[i][j];
                matrix[i][j] = tempV;
                tempV = temp;
            }
        }
        // 向外一层
        --depth;
    }
};
