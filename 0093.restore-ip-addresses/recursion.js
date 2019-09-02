/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    return recursion(s, 3);

    function recursion(str, left) {
        if (!left) {
            return ('0' === str[0] && 1 < str.length) || +str > 255 ? [] : [str];
        }

        let min = Math.max(1, str.length - left * 3);
        const max = Math.min(+str.slice(0, 3) > 255 ? 2 : 3, str.length - left);
        const result = [];
        let curPart;

        for (; min <= max; ++min) {
            curPart = str.slice(0, min);
            if ('0' === curPart[0] && 1 < curPart.length) {
                continue;
            }
            result.push(...recursion(str.slice(min), left - 1).map(item => `${curPart}.${item}`));
        }

        return result;
    }
};
