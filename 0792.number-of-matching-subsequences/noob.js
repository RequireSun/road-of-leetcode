/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
    const length = words.length;
    const array = new Array(length);

    for (let i = 0; i < length; ++i) {
        array[i] = 0;
    }

    for (let i = 0, l = S.length; i < l; ++i) {
        for (let j = 0; j < length; ++j) {
            if (array[j] < words[j].length) {
                if (S[i] === words[j][array[j]]) {
                    ++array[j];
                }
            }
        }
    }

    let result = 0;

    for (let i = 0; i < length; ++i) {
        if (array[i] === words[i].length) {
            ++result;
        }
    }

    return result;
};
