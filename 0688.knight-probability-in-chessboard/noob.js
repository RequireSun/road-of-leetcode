/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
    let array1 = new Array(N);
    let array2 = new Array(N);
    let temp;

    for (let i = 0; i < N; ++i) {
        array1[i] = new Array(N);
        array2[i] = new Array(N);

        for (let j = 0; j < N; ++j) {
            array1[i][j] = 0;
            array2[i][j] = 0;
        }
    }

    array1[r][c] = 1;

    for (let i = 0; i < K; ++i) {
        for (let r = 0; r < N; ++r) {
            for (let c = 0; c < N; ++c) {
                if (array1[r][c]) {
                    const current0125 = array1[r][c] * 0.125;

                    if (r - 1 >= 0) {
                        if (c - 2 >= 0) {
                            array2[r - 1][c - 2] += current0125;
                        }
                        if (c + 2 < N) {
                            array2[r - 1][c + 2] += current0125;
                        }
                    }

                    if (r - 2 >= 0) {
                        if (c - 1 >= 0) {
                            array2[r - 2][c - 1] += current0125;
                        }
                        if (c + 1 < N) {
                            array2[r - 2][c + 1] += current0125;
                        }
                    }

                    if (r + 1 < N) {
                        if (c - 2 >= 0) {
                            array2[r + 1][c - 2] += current0125;
                        }
                        if (c + 2 < N) {
                            array2[r + 1][c + 2] += current0125;
                        }
                    }

                    if (r + 2 < N) {
                        if (c - 1 >= 0) {
                            array2[r + 2][c - 1] += current0125;
                        }
                        if (c + 1 < N) {
                            array2[r + 2][c + 1] += current0125;
                        }
                    }

                    array1[r][c] = 0;
                }
            }
        }

        temp = array1;
        array1 = array2;
        array2 = temp;
    }

    temp = 0;

    for (let r = 0; r < N; ++r) {
        for (let c = 0; c < N; ++c) {
            if (array1[r][c]) {
                temp += array1[r][c];
            }
        }
    }

    return temp;
};