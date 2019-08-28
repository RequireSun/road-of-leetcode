var Node = function(key, prev, next) {
    this.key = key;
    this.prev = prev;
    this.next = next;
};

var Chain = function() {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

Chain.prototype.push = function(key) {
    if (this.tail) {
        this.tail = this.tail.next = new Node(key, this.tail, null);
    } else {
        this.head = this.tail = new Node(key, null, null);
    }
    ++this.size;
};

Chain.prototype.pop = function() {
    const result = this.tail;

    if (!result) {
        return result;
    }

    if (result.prev) {
        this.tail = result.prev;
        result.prev.next = null;
    } else {
        this.head = this.tail = null;
    }
    --this.size;
    return result.key;
};

Chain.prototype.unshift = function(key) {
    if (this.head) {
        this.head = this.head.prev = new Node(key, null, this.head);
    } else {
        this.head = this.tail = new Node(key, null, null);
    }
    ++this.size;
};

Chain.prototype.shift = function() {
    const result = this.head;

    if (!result) {
        return result;
    }

    if (result.next) {
        this.head = result.next;
        result.next.prev = null;
    } else {
        this.head = this.tail = null;
    }
    --this.size;
    return result.key;
};

Chain.prototype.isEmpty = function() {
    return this.head === this.tail === null;
};

Chain.prototype.spliceKey = function(key) {
    let cur = this.head;

    while (cur) {
        if (cur.key === key) {
            if (cur === this.head) {
                this.head = cur.next;
            }

            if (cur === this.tail) {
                this.tail = cur.prev;
            }

            if (cur.next) {
                cur.next.prev = cur.prev;
            }

            if (cur.prev) {
                cur.prev.next = cur.next;
            }

            --this.size;
            return cur.key;
        }
        cur = cur.next;
    }
};

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.data = [];
    this.queue = new Chain();
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

    this.queue.spliceKey(key);
    this.queue.unshift(key);

    return data;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.queue.size >= this.capacity && undefined === this.data[key]) {
        const least = this.queue.pop();
        delete this.data[least];
    }

    if (undefined !== this.data[key]) {
        this.queue.spliceKey(key);
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

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
