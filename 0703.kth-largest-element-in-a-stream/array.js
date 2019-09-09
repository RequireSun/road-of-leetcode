/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a).slice(0, k);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let i = 0;
    const l = this.nums.length;

    while (i < l && val < this.nums[i]) {
        ++i;
    }

    if (i < l) {
        this.nums.splice(i, 0, val);

        while (this.nums.length > this.k) {
            this.nums.pop();
        }
    } else if (l < this.k) {
        this.nums.push(val);
    }

    return this.nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
