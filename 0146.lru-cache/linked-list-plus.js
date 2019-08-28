/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.data = [];
    this.head = {};
    this.tail = {
        prev: this.head,
    };
    this.head.next = this.tail;
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

    if (this.head.next !== data) {
        data.prev.next = data.next;
        data.next.prev = data.prev;
        data.next = this.head.next;
        data.next.prev = data;
        data.prev = this.head;
        this.head.next = data;
    }

    return data.value;
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

    let v = this.data[key];

    if (this.count >= this.capacity && !v) {
        delete this.data[this.tail.prev.key];
        this.tail.prev.prev.next = this.tail;
        this.tail.prev = this.tail.prev.prev;
        --this.count;
    }

    if (v) {
        v.prev.next = v.next;
        v.next.prev = v.prev;
        v.prev = this.head;
        v.next = this.head.next;
        v.value = value;
    } else {
        v = {
            prev: this.head,
            next: this.head.next,
            key,
            value,
        };
        ++this.count;
    }

    this.data[key] = v;

    this.head.next = v;
    v.next.prev = v;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
