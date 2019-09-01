/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const matrix = [];
    let line;
    let count0;
    let count1;
    
    for (let i = 0; i <= m; ++i) {
        line = [];
        for (let j = 0; j <= n; ++j) {
            line.push(0);
        }
        matrix.push(line);
    }
    
    for (let i = 0, l = strs.length; i < l; ++i) {
        count0 = 0;
        count1 = 0;
        
        for (let j = 0, k = strs[i].length; j < k; ++j) {
            if ('0' === strs[i][j]) {
                ++count0;
            } else {
                ++count1;
            }
        }
        
        for (let j = m; j >= count0; --j) {
            for (let k = n; k >= count1; --k) {
                if (matrix[j - count0][k - count1] + 1 > matrix[j][k]) {
                    matrix[j][k] = matrix[j - count0][k - count1] + 1;
                }
            }
        }
    }
    
    return matrix[m][n];
};