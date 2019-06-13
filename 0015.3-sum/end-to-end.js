/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // js 的排序很弱智, 默认是用字符串的比较方式来处理的
    nums.sort((a, b) => a - b);

    const result = [];

    // 会取当前位置后的两个值进行计算, 所以不要越位了
    for (let i = 0, l = nums.length; i < l - 2; ++i) {
        // 如果当前位置已经大于 0, 那么后面的应该都会比 0 大, 没必要算了
        if (0 < nums[i]) {
            break;
        }
        // 相同值直接跳过
        // 因为下方的循环, 相同的数值早就被跑过一遍了
        if (0 === i || (0 < i && nums[i] !== nums[i - 1])) {
            let j = i + 1;
            let k = l - 1;
            let sum = -nums[i];

            while (j < k) {
                if (nums[j] + nums[k] < sum) {
                    // 和值不够, 增大小值
                    ++j;
                } else if (nums[j] + nums[k] > sum) {
                    // 和值过大, 减小大值
                    --k;
                } else {
                    result.push([nums[i], nums[j], nums[k]].sort((a, b) => a - b));
                    // 跳过相同的值
                    while (j < k && nums[j] === nums[j + 1]) {
                        ++j;
                    }
                    while (j < k && nums[k] === nums[k - 1]) {
                        --k;
                    }
                    ++j;
                    --k;
                }
            }
        }
    }

    return result;
};
