/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    const l = nums.length;
    let i, j, k;
    let result = 0;

    for (i = 0; i < l; ++i) {
        for (j = i + 1; j < l; ++j) {
            for (k = j + 1; k < l; ++k) {
                if (nums[i] < nums[j] + nums[k] && nums[j] < nums[i] + nums[k] && nums[k] < nums[i] + nums[j]) {
                    ++result;
                }
            }
        }
    }

    return result;
};
