/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    nums = nums.sort((a, b) => b - a).slice(0, k);
    this.length = nums.length;
    this.head = {
        val: Number.MAX_SAFE_INTEGER,
    };
    this.tail = {
        val: Number.MIN_SAFE_INTEGER,
    };

    this.head.next = this.tail;
    this.tail.prev = this.head;

    let cur = this.head;

    for (let i = 0, l = nums.length; i < l; ++i) {
        cur.next = {
            val: nums[i],
            prev: cur,
        };

        cur = cur.next;
    }

    cur.next = this.tail;
    this.tail.prev = cur;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let cur = this.tail.prev;

    while (val > cur.val) {
        cur = cur.prev;
    }

    let temp = cur.next;
    cur.next = {
        val: val,
        prev: cur,
        next: temp,
    };
    temp.prev = cur.next;
    ++this.length;

    if (this.length > this.k) {
        let temp = this.tail.prev;
        temp.prev.next = this.tail;
        this.tail.prev = temp.prev;
        --this.length;
    }

    return this.tail.prev.val;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
