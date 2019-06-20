/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const m = new Set();

    for (let i = 0, l = nums.length; i < l; ++i) {
        if (m.has(nums[i])) {
            m.delete(nums[i]);
        } else {
            m.add(nums[i]);
        }
    }

    return [...m.values()];
};
