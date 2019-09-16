/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    return root ? recursion(root, 1) : 0;
};

function recursion(node, depth) {
    if (node.children.length) {
        let biggest = 0;

        for (let i = 0, l = node.children.length; i < l; ++i) {
            const temp = recursion(node.children[i], depth + 1);
            if (temp > biggest) {
                biggest = temp;
            }
        }

        return biggest;
    } else {
        return depth;
    }
}
