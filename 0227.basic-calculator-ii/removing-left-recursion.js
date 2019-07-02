/**
 * 写到最后写不出来了, 暂时先放弃了
 */

const gs = [{
    // R -> Sa | a
    left: 'R',
    right: [{
        type: 'exp',
        value: [{
            type: 'id',
            value: 'S',
        }, {
            type: 'id',
            value: 'a',
        }]
    }, {
        type: 'exp',
        value: [{
            type: 'id',
            value: 'a',
        }]
    }],
}, {
    // S -> Qc | c
    left: 'S',
    right: [{
        type: 'exp',
        value: [{
            type: 'id',
            value: 'Q',
        }, {
            type: 'id',
            value: 'c',
        }]
    }, {
        type: 'exp',
        value: [{
            type: 'id',
            value: 'c',
        }]
    }],
}, {
    // Q -> Rb | b
    left: 'Q',
    right: {
        type: 'exp',
        value: [{
            type: 'exp',
            value: [{
                type: 'id',
                value: 'R',
            }, {
                type: 'id',
                value: 'b',
            }]
        }, {
            type: 'exp',
            value: [{
                type: 'id',
                value: 'b',
            }]
        }]
    },
}];

for (let i = 0, l = gs.length; i < l; ++i) {
    for (let j = 0; j < i; ++j) {
        for (let k = 0, m = gs[i].right.length; k < m; ++k) {
            for (let n = 0, o = gs[i].right[k].length; n < o; ++n) {
                if (gs[j].left === gs[i].right[k][n]) {

                }
            }
        }
    }
}

function replace(tar, sig, exp) {
    for (let i = 0, l = tar.length; i < l; ++i) {
        if ('exp' === type) {

        }

        for (let j = 0, k = tar[i].length; j < k; ++j) {
            if (sig === tar[i][j]) {
                tar[i][j] = exp;
            }
        }

        spread(tar[i]);
        // TODO 处理是否有嵌套两种情况
    }
}

function spread(exp) {
    while (true) {

    }
}
