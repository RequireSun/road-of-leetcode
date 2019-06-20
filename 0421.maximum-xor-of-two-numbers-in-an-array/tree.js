/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    const tree = {};
    let _num;
    let nonius;
    let i = 0;
    let j;
    let l = nums.length;
    let numL;
    let tempNum;

    for (; i < l; ++i) {
        _num = nums[i].toString(2);
        numL = _num.length;
        nonius = tree;

        for (j = 0; 32 > j; ++j) {
            if (32 - j > numL) {
                tempNum = '0';
            } else {
                tempNum = _num[j + numL - 32];
            }

            if (!nonius[tempNum]) {
                nonius[tempNum] = {};
            }

            nonius = nonius[tempNum];
        }

        nonius.value = nums[i];
    }

    let result = 0;

    for (i = 0; i < l; ++i) {
        _num = nums[i].toString(2);
        numL = _num.length;
        nonius = tree;

        for (j = 0; 32 > j; ++j) {
            if (nonius[0] && nonius[1]) {
                if (32 - j > numL) {
                    tempNum = '0';
                } else {
                    tempNum = _num[j + numL - 32];
                }
                nonius = '0' === tempNum ? nonius[1] : nonius[0];
            } else {
                nonius = nonius[0] || nonius[1];
            }
        }

        result = Math.max(result, nonius.value ^ nums[i]);
    }

    return result;
};
