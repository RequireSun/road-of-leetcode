/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = [];
    let temp;

    for (let i = 0, l = nums.length; i < l; ++i) {
        temp = Math.abs(nums[i]) - 1;
        if (nums[temp] < 0) {
            result.push(temp + 1);
        }
        nums[temp] = -nums[temp];
    }

    return result;
};
