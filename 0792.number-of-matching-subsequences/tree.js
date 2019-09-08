/**
 * 为了省事, 直接把第二个合并到第一个上了
 */
function deepCombine(obj1, obj2) {
    for (const key of Object.keys(obj2)) {
        if (!obj1[key]) {
            obj1[key] = obj2[key];
        } else if ('value' === key) {
            // value 有时候合并了就丢了
            obj1[key] = obj1[key] + obj2[key];
        } else {
            deepCombine(obj1[key], obj2[key]);
        }
    }
}

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
    const root = {};

    for (let i = 0, l = words.length; i < l; ++i) {
        let curNode = root;
        for (let j = 0, k = words[i].length; j < k; ++j) {
            if (!curNode[words[i][j]]) {
                curNode[words[i][j]] = {};
            }
            curNode = curNode[words[i][j]];
        }
        if (curNode.value) {
            // 记一下, 要不然后面不好标记
            ++curNode.value;
        } else {
            curNode.value = 1;
        }
    }

    let result = 0;

    for (let i = 0, l = S.length; i < l; ++i) {
        const matched = root[S[i]];

        if (matched) {
            delete root[S[i]];

            if (0 < matched.value) {
                result += matched.value;
                delete matched.value;
            }

            for (const key of Object.keys(matched)) {
                if (root[key]) {
                    // 这里要深合并, 要不然会把结果冲掉
                    deepCombine(root[key], matched[key]);
                } else {
                    root[key] = matched[key];
                }
            }
        }
    }

    return result;
};
