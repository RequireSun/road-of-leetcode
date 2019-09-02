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
    const array = flat(root);
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 1, l = array.length; i < l; ++i) {
        if (array[i] - array[i - 1] < min) {
            min = array[i] - array[i - 1];
        }
    }

    return min;

    function flat(node) {
        const result = [];

        if (node.left) {
            result.push(...flat(node.left));
        }

        result.push(node.val);

        if (node.right) {
            result.push(...flat(node.right));
        }

        return result;
    }
};
