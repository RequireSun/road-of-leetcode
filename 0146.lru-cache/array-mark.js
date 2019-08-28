/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.data = [];
    this.queue = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const data = this.data[key];

    if (undefined === data) {
        return -1;
    }

    const queueItemIndex = this.queue.indexOf(key);
    const item = this.queue.splice(queueItemIndex, 1);
    this.queue.unshift(...item);

    return data;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.queue.length >= this.capacity && undefined === this.data[key]) {
        const least = this.queue.pop();
        delete this.data[least];
    }

    if (undefined !== this.data[key]) {
        const queueItemIndex = this.queue.indexOf(key);
        this.queue.splice(queueItemIndex, 1);
    }

    this.queue.unshift(key);
    this.data[key] = value;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
