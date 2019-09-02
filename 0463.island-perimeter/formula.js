/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let islands = 0;
    let neighbours = 0;

    for (let i = 0, l = grid.length; i < l; ++i) {
        for (let j = 0, k = grid[i].length; j < k; ++j) {
            if (grid[i][j]) {
                ++islands;

                if (i > 0 && grid[i - 1][j]) {
                    ++neighbours;
                }

                if (j > 0 && grid[i][j - 1]) {
                    ++neighbours;
                }
            }
        }
    }

    return islands * 4 - neighbours * 2;
};
