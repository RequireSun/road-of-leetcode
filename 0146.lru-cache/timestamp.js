let timestamp = 0;

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.data = [];
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

    data.lastGet = ++timestamp;

    return data.value;
};

LRUCache.prototype.findLeastIndex = function() {
    let leastTime = ++timestamp;
    let leastIndex = -1;

    this.data.forEach((item, index) => {
        if (item.lastGet < leastTime) {
            leastTime = item.lastGet;
            leastIndex = index;
        }
    });

    return leastIndex;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (!this.capacity) {
        return;
    }

    if (this.size >= this.capacity && undefined === this.data[key]) {
        const index = this.findLeastIndex();
        delete this.data[index];
        --this.size;
    }

    if (undefined === this.data[key]) {
        ++this.size;
    }

    this.data[key] = {
        lastGet: ++timestamp,
        value,
    };
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
