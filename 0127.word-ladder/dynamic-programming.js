/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (-1 === wordList.indexOf(endWord)) {
        return 0;
    }
    if (-1 === wordList.indexOf(beginWord)) {
        wordList.push(beginWord);
    }

    const map = [];
    const l = wordList.length;

    for (let i = 0; i < l; ++i) {
        map.push([]);
    }

    for (let i = 0; i < l; ++i) {
        for (let j = i + 1; j < l; ++j) {
            if (isFamiliar(wordList[i], wordList[j])) {
                map[i][j] = true;
            }
        }
    }

    let indexes = [wordList.indexOf(beginWord)];
    let minimum = wordList.map(() => Infinity);

    minimum[indexes[0]] = 1;

    while (indexes.length) {
        for (let i = 0; i < l; ++i) {
            if ((true === map[indexes[0]][i] || true === map[i][indexes[0]]) && minimum[i] > minimum[indexes[0]] + 1) {
                minimum[i] = minimum[indexes[0]] + 1;
                if (-1 === indexes.indexOf(i)) {
                    indexes.push(i);
                }
            }
        }

        indexes.shift();
    }

    if (Infinity !== minimum[wordList.indexOf(endWord)]) {
        return minimum[wordList.indexOf(endWord)];
    } else {
        return 0;
    }
};

var isFamiliar = function (word1, word2) {
    let diffCount = 0;

    for (let i = 0, l = word1.length; i < l; ++i) {
        if (word1[i] !== word2[i]) {
            ++diffCount;
        }
    }

    return 1 === diffCount;
};
