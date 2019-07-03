/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const map = [];

    for (let i = 0, l = citations.length; i < l; ++i) {
        map[citations[i]] = (map[citations[i]] || 0) + 1;
    }

    let temp = 0;

    for (let i = map.length - 1; i >= 0; --i) {
        temp += map[i] || 0;
        if (temp >= i) {
            return i;
        }
    }

    return 0;
};
