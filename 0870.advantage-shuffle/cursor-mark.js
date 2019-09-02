/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    A.sort((a, b) => a - b);
    const cloneB = B.slice(0).sort((a, b) => a - b);
    const result = [];

    const matched = new Map();
    let cursorA = A.length - 1;
    let cursorB = B.length - 1;
    let temp;

    while (cursorB >= 0) {
        if (A[cursorA] > cloneB[cursorB]) {
            if (!matched.has(cloneB[cursorB])) {
                matched.set(cloneB[cursorB], []);
            }

            matched.get(cloneB[cursorB--]).push(A[cursorA--]);
        } else {
            --cursorB;
        }
    }

    for (let i = 0, l = B.length; i < l; ++i) {
        if (matched.has(B[i])) {
            temp = matched.get(B[i]);
            result.push(temp.pop());
            if (!temp.length) {
                matched.delete(B[i]);
            }
        } else {
            result.push(A[cursorA--]);
        }
    }

    return result;
};
