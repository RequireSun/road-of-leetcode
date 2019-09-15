/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
    let result = 0;
    const lengthX = A.length;
    const lengthY = lengthX ? A[0].length : 0;

    for (let i = 0; i < lengthX; ++i) {
        for (let j = 0; j < lengthY; ++j) {
            if (A[i][j]) {
                result += getManor(A, i, j, lengthX, lengthY);
            }
        }
    }

    return result;
};

function getManor(area, i, j, lengthX, lengthY) {
    let canWalkOff = false;
    let count = 0;
    let todos = [[i, j]];
    area[i][j] = 0;

    while (todos.length) {
        const newTodos = [];

        for (let index = 0, pos = todos[index]; pos = todos[index]; ++index) {
            const [i, j] = pos;
            ++count;

            if (i === 0 || j === 0 || i === lengthX - 1 || j === lengthY - 1) {
                canWalkOff = true;
            }

            if (i > 0 && area[i - 1][j]) {
                area[i - 1][j] = 0;
                newTodos.push([i - 1, j]);
            }
            if (i < lengthX - 1 && area[i + 1][j]) {
                area[i + 1][j] = 0;
                newTodos.push([i + 1, j]);
            }
            if (j > 0 && area[i][j - 1]) {
                area[i][j - 1] = 0;
                newTodos.push([i, j - 1]);
            }
            if (j < lengthY -1 && area[i][j + 1]) {
                area[i][j + 1] = 0;
                newTodos.push([i, j + 1]);
            }
        }

        todos = newTodos;
    }

    return canWalkOff ? 0 : count;
}
