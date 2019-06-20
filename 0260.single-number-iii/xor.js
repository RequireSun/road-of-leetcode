/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let diff = 0;
    let i, l = nums.length;
    const result = [0, 0];

    for (i = 0; i < l; ++i) {
        diff ^= nums[i];
    }

    diff &= -diff;

    for (i = 0; i < l; ++i) {
        // 按位与的优先级低于 ===, 所以要带括号
        if (0 === (nums[i] & diff)) {
            result[0] ^= nums[i];
        } else {
            result[1] ^= nums[i];
        }
    }

    return result;
};
