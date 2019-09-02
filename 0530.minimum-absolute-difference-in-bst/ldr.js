/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let min = Number.MAX_SAFE_INTEGER;
    let prev = -Number.MAX_SAFE_INTEGER;

    midOrder(root);

    return min;

    function midOrder(node) {
        if (node.left) {
            midOrder(node.left);
        }

        if (node.val - prev < min) {
            min = node.val - prev;
        }

        prev = node.val;

        if (node.right) {
            midOrder(node.right);
        }
    }
};
