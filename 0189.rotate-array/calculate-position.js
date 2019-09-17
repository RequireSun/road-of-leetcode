/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums.length < 2) {
        return;
    }

    const length = nums.length;

    while (k >= length) {
        k -= length;
    }

    for (let i = 0; i < length; ++i) {
        if (nums[i] < 10000000000) {
            let curPos = i;
            let temp = nums[curPos];

            do {
                const nextPos = calcPos(length, k, curPos);
                nums[nextPos] ^= temp;
                temp ^= nums[nextPos];
                nums[nextPos] ^= temp;
                nums[nextPos] = nums[nextPos] + 100000000000;
                curPos = nextPos;
            } while (curPos !== i);
        }

        nums[i] -= 100000000000;
    }
};

function calcPos(length, k, pos) {
    if (pos < length - k) {
        return pos + k;
    } else {
        return pos + k - length;
    }
}
