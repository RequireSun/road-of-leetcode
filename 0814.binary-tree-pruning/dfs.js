/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    recursion(root);
    return root;
};

function recursion(node) {
    let canRemove = true;
    if (node.left) {
        if (recursion(node.left)) {
            node.left = null;
        } else {
            canRemove = false;
        }
    }
    if (node.right) {
        if (recursion(node.right)) {
            node.right = null;
        } else {
            canRemove = false;
        }
    }

    return canRemove && node.val === 0;
}
