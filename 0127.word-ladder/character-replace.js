/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
    let beginSet = new Set(),
        endSet   = new Set(),
        visited  = new Set();

    wordList = new Set(wordList);

    if (!wordList.has(endWord)) {
        return 0;
    }

    let len = 1;
    const strLen = beginWord.length;

    beginSet.add(beginWord);
    endSet.add(endWord);

    while (beginSet.size && endSet.size) {
        if (beginSet.size > endSet.size) {
            let set = beginSet;
            beginSet = endSet;
            endSet = set;
        }

        let temp = new Set();

        for (const word of beginSet) {
            let chs = word.split('');

            for (let i = 0; i < strLen; ++i) {
                for (let c = 97; c <= 122; ++c) {
                    let old = chs[i];
                    chs[i] = String.fromCharCode(c);
                    let target = chs.join('');

                    if (endSet.has(target)) {
                        return len + 1;
                    }

                    if (!visited.has(target) && wordList.has(target)) {
                        temp.add(target);
                        visited.add(target);
                    }

                    chs[i] = old;
                }
            }
        }

        beginSet = temp;
        ++len;
    }

    return 0;
};
