/**
 * 以下统称数字为 "石头"
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let i, j;
    const l = nums.length;
    let sum = 0;

    for (i = 0; i < l; ++i) {
        sum += nums[i];
    }

    if (sum % 2) {
        return false;
    }

    sum /= 2;
    // 这一步十分关键, js 在已经初始化后的数组中的效率与动态插入元素的数组中的效率完全就是两个量级
    const canDo = new Array(sum + 1);

    canDo[0] = true;

    for (i = 1; i < l; ++i) {
        // 倒着是为了防止一个小数正序跑的时候把它所有的倍数都标记为 true
        for (j = sum; j >= nums[i - 1]; --j) {
            if (!canDo[j] && j >= nums[i - 1] && canDo[j - nums[i - 1]]) {
                canDo[j] = canDo[j - nums[i - 1]];
            }
        }
        // 提升 30% 效率的一句话
        if (canDo[sum]) {
            return true;
        }
    }

    return false;
};
