/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (t < 0) {
        return false;
    }
    const array = {};

    for (let i = 0, l = nums.length; i < l; ++i) {
        if (!array[nums[i]]) {
            array[nums[i]] = [i];
        } else {
            array[nums[i]].push(i);
        }
    }

    const keys = Object.keys(array).sort((a, b) => a - b);

    for (let i = 0, iL = keys.length; i < iL; ++i) {
        const valueI = keys[i];
        const iS = array[valueI];

        if (iS.length > 1) {
            for (let j = 0, jL = iS.length; j < jL; ++j) {
                for (let m = jL - 1; m > j; --m) {
                    // 因为后 push 入的肯定都在后面, 所以不用 abs 也没问题
                    if (iS[m] - iS[j] <= k) {
                        return true;
                    }
                }
            }
        }

        for (let j = i + 1; j < iL && keys[j] - valueI <= t; ++j) {
            const jS = array[keys[j]];
            const mL = iS.length;
            const nL = jS.length;

            for (let m = 0; m < mL; ++m) {
                for (let n = 0; n < nL; ++n) {
                    if (Math.abs(iS[m] - jS[n]) <= k) {
                        return true;
                    }
                }
            }
        }
    }

    return false;
};
