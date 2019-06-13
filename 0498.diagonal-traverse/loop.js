/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (!matrix.length) {
        return [];
    }

    const result = [];
    let i = 0, j = 0;
    const l = matrix.length, k = matrix[0].length;

    // 因为算法实在判断不了只有一行的情况, 所以直接在这里做了特殊处理
    if (1 === l) {
        return matrix[0];
    } else if (1 === k) {
        return matrix.map(item => item[0]);
    }

    while (i < l && j < k) {
        result.push(matrix[i][j]);

        if (0 === i) {
            if (0 === j % 2) {
                // 顶端, j 为偶, 右转
                if (j === k - 1) {
                    // 右端到头了
                    ++i;
                } else {
                    ++j;
                }
            } else {
                --j;
                ++i;
            }
        } else if (0 === j) {
            if (0 !== i % 2) {
                // 左端, i 为奇, 下转
                if (i === l - 1) {
                    // 到下头了
                    ++j;
                } else {
                    ++i;
                }
            } else {
                --i;
                ++j;
            }
        } else if (l - 1 === i) {
            // 下方到头后, 要根据奇偶判断转向方向
            if (0 === l % 2) {
                // 纵向偶数
                if (0 === j % 2) {
                    // j 为偶, 右转
                    if (j === k - 1) {
                        // 右端到头, 结束
                        break;
                    } else {
                        ++j;
                    }
                } else {
                    --i;
                    ++j;
                }
            } else {
                // 纵向奇数
                if (0 !== j % 2) {
                    // j 为奇, 右转
                    if (j === k - 1) {
                        // 右端到头, 结束
                        break;
                    } else {
                        ++j;
                    }
                } else {
                    --i;
                    ++j;
                }
            }
        } else if (k - 1 === j) {
            // 右方到头后, 要根据奇偶判断转向方向
            if (0 === k % 2) {
                // 横向偶数
                if (0 !== i % 2) {
                    // i 为奇, 下转
                    if (i === l - 1) {
                        // 右端到头, 结束
                        break;
                    } else {
                        ++i;
                    }
                } else {
                    ++i;
                    --j;
                }
            } else {
                // 横向奇数
                if (0 === i % 2) {
                    // i 为偶, 下转
                    if (i === l - 1) {
                        // 右端到头, 结束
                        break;
                    } else {
                        ++i;
                    }
                } else {
                    ++i;
                    --j;
                }
            }
        } else if (0 === (i + j) % 2) {
            // 偶数向右上
            --i;
            ++j;
        } else {
            // 奇数向左下
            ++i;
            --j;
        }
    }

    return result;
};
