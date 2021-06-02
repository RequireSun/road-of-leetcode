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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    if (!root) {
        return [];
    }
    var dSet = new Set(to_delete);
    var rSet = new Set();
    recursion(root, true);
    return [...rSet];

    function recursion(node, isRoot) {
        if (!dSet.has(node.val)) {
            if (isRoot) {
                rSet.add(node);
            }
            if (node.left) {
                node.left = recursion(node.left, false);
            }
            if (node.right) {
                node.right = recursion(node.right, false);
            }
            return node;
        } else {
            if (node.left) {
                node.left = recursion(node.left, true);
            }
            if (node.right) {
                node.right = recursion(node.right, true);
            }
            return null;
        }
    }
};
