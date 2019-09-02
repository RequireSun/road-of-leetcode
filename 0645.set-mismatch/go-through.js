/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const array = new Array(nums.length + 1);
    const l = nums.length;
    let dup;
    let lost;

    for (let i = 0; i <= l; ++i) {
        if (array[nums[i]]) {
            dup = nums[i];
        }
        array[nums[i]] = 1;
    }

    for (let i = 1; i <= l; ++i) {
        if (!array[i]) {
            lost = i;
        }
    }

    return [dup, lost];
};
