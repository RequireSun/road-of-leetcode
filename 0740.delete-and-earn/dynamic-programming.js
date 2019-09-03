/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const l = nums.length;
    const array = new Array(10001);
    let take = 0, skip = 0;
    let takei, skipi;
    let max = 0;

    for (let i = 0; i < l; ++i) {
        array[nums[i]] = (array[nums[i]] || 0) + nums[i];
        if (max < nums[i]) {
            max = nums[i];
        }
    }

    for (let i = 0; i <= max; ++i) {
        takei = skip + (array[i] || 0);
        skipi = Math.max(take, skip);

        take = takei;
        skip = skipi;
    }

    return Math.max(take, skip);
};