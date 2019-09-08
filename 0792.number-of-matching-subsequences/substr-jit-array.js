/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
    const map = new Array(26);

    for (let i = 0, l = words.length; i < l; ++i) {
        const bucket = map[words[i].charCodeAt(0) - 97];

        if (bucket) {
            bucket.push(words[i].substr(1));
        } else {
            map[words[i].charCodeAt(0) - 97] = [words[i].substr(1)];
        }
    }

    console.log(JSON.stringify(map, undefined, 2));

    let result = 0;

    for (let i = 0, l = S.length; i < l; ++i) {
        if (map[S.charCodeAt(i) - 97]) {
            const arr = map[S.charCodeAt(i) - 97];
            delete map[S.charCodeAt(i) - 97];

            for (let j = 0, k = arr.length; j < k; ++j) {
                if (arr[j]) {
                    const bucket = map[arr[j].charCodeAt(0) - 97];

                    if (bucket) {
                        bucket.push(arr[j].substr(1));
                    } else {
                        map[arr[j].charCodeAt(0) - 97] = [arr[j].substr(1)];
                    }
                } else {
                    ++result;
                }
            }
        }
    }

    return result;
};
