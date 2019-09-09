/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    nums = nums.sort((a, b) => b - a).slice(0, k);
    this.array = [];
    this.length = nums.length;

    for (let i = 0; i < k; ++i) {
        this.array[nums[i] + 100000000] = (this.array[nums[i] + 100000000] || 0) + 1;
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    ++this.length;
    this.array[val + 100000000] = (this.array[val + 100000000] || 0) + 1;
    const keys = Object.keys(this.array);

    if (this.length > this.k) {
        const num = keys[0];
        --this.array[num];
        --this.length;

        if (0 === this.array[num]) {
            delete this.array[num];
            keys.shift();
        }
    }

    return keys.shift() - 100000000;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
