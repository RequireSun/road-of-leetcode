/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const pointers = {};

    return createNode(node, pointers);
};

var createNode = function (origin, pointers) {
    const result = pointers[origin.val] = {
        val: origin.val,
        neighbors: [],
    };

    for (let i = 0, l = origin.neighbors.length; i < l; ++i) {
        let _n;
        if (pointers[origin.neighbors[i].val]) {
            _n = pointers[origin.neighbors[i].val];
        } else {
            // 递归生成
            _n = createNode(origin.neighbors[i], pointers);
        }
        result.neighbors.push(_n);
    }

    return result;
}
