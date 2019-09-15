/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let least;

    for (let i = 1, l = nums.length; i < l; ++i) {
        if (least !== undefined) {
            if (nums[i] < least) {
                least = nums[i];
            }
        } else if (nums[i] < nums[i - 1]) {
            least = nums[i];
        }
    }

    if (least === undefined) {
        return 0;
    }

    let biggest;

    for (let i = nums.length - 1; i > 0; --i) {
        if (biggest !== undefined) {
            if (nums[i - 1] > biggest) {
                biggest = nums[i - 1];
            }
        } else if (nums[i] < nums[i - 1]) {
            biggest = nums[i - 1];
        }
    }

    let start = 0;
    let end = nums.length - 1;

    while (nums[start] <= least) {
        ++start;
    }

    while (nums[end] >= biggest) {
        --end;
    }

    return end - start + 1;
};
