/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    return recursion(root) > 0;
};

function recursion(node) {
    var l, r;

    if (node.left || node.right) {
        if (!node.left) {
            r = recursion(node.right);
            if (r > 1 || r < 0) {
                return -1;
            }
            console.log(node.val, r + 1);
            return r + 1;
        } else if (!node.right) {
            l = recursion(node.left);
            if (l > 1 || l < 0) {
                return -1;
            }
            console.log(node.val, l + 1);
            return l + 1;
        } else {
            l = recursion(node.left);
            r = recursion(node.right);
            if (l < 0 || r < 0) {
                return -1;
            }
            if (Math.abs(l - r) > 1) {
                return -1;
            }
            console.log(node.val, l, r);
            return Math.max(l, r) + 1;
        }
    } else {
        console.log(node.val);
        return 1;
    }
}
