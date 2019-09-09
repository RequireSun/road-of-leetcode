/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    const result = [];
    const x = matrix.length;
    let y;
    if (x) {
        y = matrix[0].length;
    }

    const todos = new Array(x * y);
    let left = 0, right = 0;

    for (let i = 0; i < x; ++i) {
        result[i] = new Array(y);

        for (let j = 0; j < y; ++j) {
            if (0 === matrix[i][j]) {
                result[i][j] = 0;
                if (
                    (i > 0 && matrix[i - 1][j] !== 0) ||
                    (i < x - 1 && matrix[i + 1][j] !== 0) ||
                    (j > 0 && matrix[i][j - 1] !== 0) ||
                    (j < y - 1 && matrix[i][j + 1] !== 0)
                ) {
                    todos[right++] = [i, j];
                }
            } else {
                result[i][j] = Number.MAX_SAFE_INTEGER;
            }
        }
    }

    while (left < right) {
        const todo = todos[left++];
        const [i, j] = todo;
        const todoValue = result[i][j] + 1;

        if (i > 0) {
            if (result[todo[0] - 1][j] > todoValue) {
                result[i - 1][j] = todoValue;
                todos[right++] = [i - 1, j];
            }
        }

        if (i < x - 1) {
            if (result[todo[0] + 1][j] > todoValue) {
                result[i + 1][j] = todoValue;
                todos[right++] = [i + 1, j];
            }
        }

        if (j > 0) {
            if (result[i][todo[1] - 1] > todoValue) {
                result[i][j - 1] = todoValue;
                todos[right++] = [i, j - 1];
            }
        }

        if (j < y - 1) {
            if (result[i][todo[1] + 1] > todoValue) {
                result[i][j + 1] = todoValue;
                todos[right++] = [i, j + 1];
            }
        }
    }

    return result;
};
