/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const array = new Map();

    recursion(root, 0, 0, array);

    return [...array.keys()].sort((a, b) => a - b).map(index => array.get(index).filter(item => undefined !== item).reduce((prev, cur) => {
        prev.push(...cur.sort((a, b) => a - b));
        return prev;
    }, []));
};

function recursion(node, index, depth, array) {
    if (node.left) {
        recursion(node.left, index - 1, depth + 1, array);
    }
    if (!array.has(index)) {
        array.set(index, []);
    }
    const collection = array.get(index);
    if (!collection[depth]) {
        collection[depth] = [];
    }
    collection[depth].push(node.val);
    if (node.right) {
        recursion(node.right, index + 1, depth + 1, array);
    }
}
