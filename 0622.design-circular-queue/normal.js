class MyCircularQueue {
    length = 0;
    head = 0;
    tail = -1;

    /**
     * Initialize your data structure here. Set the size of the queue to be k.
     * @param {number} k
     */
    constructor(k) {
        this.array = new Uint16Array(this.k = k);
    }

    /**
     * Insert an element into the circular queue. Return true if the operation is successful.
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.length === this.k) {
            return false;
        }

        if (this.tail === this.k - 1) {
            this.array[this.tail = 0] = value;
        } else {
            this.array[++this.tail] = value;
        }

        ++this.length;
        return true;
    }

    /**
     * Delete an element from the circular queue. Return true if the operation is successful.
     * @return {boolean}
     */
    deQueue() {
        if (this.length === 0) {
            return false;
        }
        if (++this.head >= this.k) {
            this.head = 0;
        }
        --this.length;
        return true;
    }

    /**
     * Get the front item from the queue.
     * @return {number}
     */
    Front() {
        return this.length === 0 ? -1 : this.array[this.head];
    }

    /**
     * Get the last item from the queue.
     * @return {number}
     */
    Rear() {
        return this.length === 0 ? -1 : this.array[this.tail];
    }

    /**
     * Checks whether the circular queue is empty or not.
     * @return {boolean}
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * Checks whether the circular queue is full or not.
     * @return {boolean}
     */
    isFull() {
        return this.length === this.k;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
