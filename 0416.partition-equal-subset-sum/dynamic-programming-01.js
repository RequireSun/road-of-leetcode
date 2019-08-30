/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    let i, j;
    const l = nums.length;

    for (i = 0; i < l; ++i) {
        sum += nums[i];
    }

    if (sum % 2) {
        return false;
    }

    sum /= 2;

    const matrix = [];

    for (i = 0; i <= l; ++i) {
        matrix.push(new Array(sum + 1));
        // 拿一个数字的时候, 能够满足的和值情况, 就相当于每个都放进去看一下
        matrix[i][0] = true;
    }

    for (i = 1; i < l + 1; ++i) {
        for (j = 1; j < sum + 1; ++j) {
            matrix[i][j] = matrix[i - 1][j];

            if (j >= nums[i - 1] && !matrix[i][j]) {
                matrix[i][j] = matrix[i - 1][j - nums[i - 1]];
            }
        }
    }

    return matrix[l][sum] || false;
};
