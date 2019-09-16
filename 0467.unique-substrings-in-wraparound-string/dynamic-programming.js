/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    const mark = new Uint16Array(26);
    const cache = new Uint8Array(p.length);
    let combo = 1;
    cache[0] = p.charCodeAt(0) - 97;
    mark[cache[0]] = 1;

    for (let i = 1, l = p.length; i < l; ++i) {
        cache[i] = p.charCodeAt(i) - 97;
        const v = cache[i] - cache[i - 1];

        if (v === 1 || v === -25) {
            ++combo;
        } else {
            combo = 1;
        }

        if (mark[cache[i]] < combo) {
            mark[cache[i]] = combo;
        }
    }

    let result = 0;

    for (let i = 0; i < 26; ++i) {
        result += mark[i];
    }

    return result;
};
