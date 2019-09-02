/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (A.length !== B.length) {
        return false;
    }
    return -1 < `${A}${A}`.indexOf(B);
};
