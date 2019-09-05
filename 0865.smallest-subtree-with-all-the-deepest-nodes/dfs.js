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
var subtreeWithAllDeepest = function(root) {
    const current = [];
    let result = [];
    let max = 0;

    recursion(root, '');

    const commonSubsequence = [];
    const length = result.length;
    let isDiff = false;
    let temp;

    for (let i = 0; i < max; ++i) {
        temp = result[0][i];

        for (let j = 1; j < length; ++j) {
            if (temp !== result[j][i]) {
                isDiff = true;
                break;
            }
        }

        if (isDiff) {
            break;
        }
        commonSubsequence.push(temp);
    }
    // 第一位是的字符串, 也不要了
    commonSubsequence.shift();

    return goNode(root, commonSubsequence);


    function recursion(node, direction) {
        current.push(direction);

        if (!node.left && !node.right) {
            if (current.length > max) {
                max = current.length;
                result = [[...current]];
            } else if (current.length === max) {
                result.push([...current]);
            }

            return current.pop();
        }

        if (node.left) {
            recursion(node.left, 'left');
        }

        if (node.right) {
            recursion(node.right, 'right');
        }

        current.pop();
    }

    function goNode(node, path) {
        return path.length ? goNode(node[path[0]], path.slice(1)) : node;
    }
};