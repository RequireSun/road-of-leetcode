/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = {};
    let temp;

    for (let i = 0, l = nums.length; i < l;) {
        if (nums[i] === i + 1) {
            ++i;
            continue;
        }

        if (nums[nums[i] - 1] !== nums[i]) {
            temp = nums[i];
            nums[i] = nums[nums[i] - 1];
            nums[temp - 1] = temp;
        } else {
            result[nums[i]] = 1;
            ++i;
        }
    }

    return Object.keys(result);
};
