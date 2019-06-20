/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let max = 0;
    let mask = 0;

    for (let i = 31; 0 <= i; --i) {
        mask = mask | (1 << i);
        const set = new Set();
        for (let n of nums) {
            set.add(n & mask);
        }
        let temp = max | (1 << i);
        for (let prefix of set) {
            if (set.has(temp ^ prefix)) {
                max = temp;
                break;
            }
        }
    }

    return max;
};
