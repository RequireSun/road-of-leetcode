/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b);

    const l = nums.length;
    let i, j, k;
    let result = 0;

    for (i = l - 1; i >= 2; --i) {
        j = 0;
        k = i - 1;
        while (j < k) {
            if (nums[j] + nums[k] > nums[i]) {
                result += k - j;
                --k;
            } else {
                ++j;
            }
        }
    }

    return result;
};
