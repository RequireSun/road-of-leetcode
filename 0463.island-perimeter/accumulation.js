/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let result = 0;
    let temp;

    for (let i = 0, l = grid.length; i < l; ++i) {
        for (let j = 0, k = grid[i].length; j < k; ++j) {
            if (grid[i][j]) {
                temp = 4;

                if (i > 0 && grid[i - 1][j]) {
                    // 上面有的话, 需要把上面那一块的边也减掉
                    temp -= 2;
                }

                if (j > 0 && grid[i][j - 1]) {
                    // 左面有的话, 需要把左面那一块的边也减掉
                    temp -= 2;
                }

                result += temp;
            }
        }
    }

    return result;
};
