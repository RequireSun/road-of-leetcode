/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const sorted = nums.slice().sort((a, b) => a - b);
    let start;

    for (let i = 0, l = nums.length; i < l; ++i) {
        if (nums[i] !== sorted[i]) {
            start = i;
            break;
        }
    }

    if (start === undefined) {
        return 0;
    }

    for (let i = nums.length - 1; i >= 0; --i) {
        if (nums[i] !== sorted[i]) {
            return i - start + 1;
        }
    }
};
