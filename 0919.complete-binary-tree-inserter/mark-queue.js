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
var CBTInserter = function(root) {
    this.root = root;
};

function traveral(node, depth, map) {
    if (!node.left || !node.right) {
        if (!map.has(depth)) {
            map.set(depth, []);
        }

        map.get(depth).push(node);
    }

    if (node.left) {
        traveral(node.left, depth + 1, map);
    }

    if (node.right) {
        traveral(node.right, depth + 1, map);
    }
}

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    if (!this.secBottom) {
        const map = new Map();
        traveral(this.root, 0, map);

        const [bottom, secBottom] = [...map.keys()];

        if (undefined === secBottom || undefined === bottom) {
            if (undefined === secBottom) {
                this.secBottom = map.get(bottom);
                this.bottom = [];
            } else {
                this.secBottom = map.get(secBottom);
                this.bottom = [];
            }
        } else {
            if (secBottom > bottom) {
                this.secBottom = map.get(bottom);
                this.bottom = map.get(secBottom);
            } else {
                this.secBottom = map.get(secBottom);
                this.bottom = map.get(bottom);
            }
        }
    }

    const target = this.secBottom[0];

    if (!target.left) {
        target.left = {
            val: v,
            left: null,
            right: null,
        };
        this.bottom.push(target.left);
    } else {
        target.right = {
            val: v,
            left: null,
            right: null,
        };
        this.bottom.push(target.right);

        this.secBottom.shift();

        if (!this.secBottom.length) {
            this.secBottom = this.bottom;
            this.bottom = [];
        }
    }

    return target.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
