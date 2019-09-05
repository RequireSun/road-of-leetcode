/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.stack = [];
    this.root = root;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if (this.stack.length) {
        const top = this.stack.pop();
        let cur = top.right;

        while (cur) {
            this.stack.push(cur);
            cur = cur.left;
        }

        return this.stack[this.stack.length - 1].val;
    } else {
        let cur = this.root;

        do {
            this.stack.push(cur);
        } while (cur = cur.left);

        return this.stack[this.stack.length - 1].val;
    }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if (!this.stack.length) {
        // 没初始化或者遍历完了
        return !!this.root;
    } else if (this.stack.length > 1 || this.stack[0].right) {
        // 简化成 return !!(xxx) 竟然更慢了
        return true;
    } else {
        return false;
    }

};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */