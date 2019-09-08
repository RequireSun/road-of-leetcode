/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (k < 1 || t < 0) {
        return false;
    }
    const array = new Map();

    for (let i = 0, iL = nums.length; i < iL; ++i) {
        // js 的数值在一百亿左右应该都还是正常的
        const noNegative = nums[i] + 10000000000;
        const factor = Math.floor(noNegative / (t + 1));
        if (
            array.has(factor) ||
            (array.has(factor - 1) && noNegative - array.get(factor - 1) <= t) ||
            (array.has(factor + 1) && array.get(factor + 1) - noNegative <= t)
        ) {
            return true;
        }
        if (array.size >= k) {
            array.delete(Math.floor((nums[i - k] + 10000000000) / (t + 1)));
        }

        array.set(factor, noNegative);
    }

    return false;
};
