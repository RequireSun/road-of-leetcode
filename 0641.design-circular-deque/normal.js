/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.limit = k;
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.length >= this.limit) {
        return false;
    }

    if (!this.head && !this.tail) {
        this.head = this.tail = {
            value,
            prev: undefined,
            next: undefined,
        }
    } else {
        this.head.prev = {
            value,
            prev: undefined,
            next: this.head,
        };

        this.head = this.head.prev;
    }

    ++this.length;

    return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.length >= this.limit) {
        return false;
    }

    if (!this.head && !this.tail) {
        this.head = this.tail = {
            value,
            prev: undefined,
            next: undefined,
        }
    } else {
        this.tail.next = {
            value,
            prev: this.tail,
            next: undefined,
        };

        this.tail = this.tail.next;
    }

    ++this.length;

    return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (!this.length) {
        return false;
    }

    this.head = this.head.next;
    if (this.head) {
        this.head.prev = undefined;
    } else {
        this.tail = undefined;
    }
    --this.length;

    return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (!this.length) {
        return false;
    }

    this.tail = this.tail.prev;
    if (this.tail) {
        this.tail.next = undefined;
    } else {
        this.head = undefined;
    }
    --this.length;

    return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (!this.length) {
        return -1;
    }

    return this.head.value;
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (!this.length) {
        return -1;
    }

    return this.tail.value;
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return !this.length;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.length === this.limit;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
