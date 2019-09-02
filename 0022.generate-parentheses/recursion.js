/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    return gen('(', n - 1, n);

    function gen(cur, left, right) {
        const result = [];

        // 右比左多, 说明有未闭合的左括号, 可以加右括号
        if (left < right) {
            result.push(...gen(`${cur})`, left, right - 1));
        }
        // 可能会存在左边用完的情况, 这时候就等右边消耗完就可以了, 这里就不要再走了
        if (left) {
            result.push(...gen(`${cur}(`, left - 1, right));
        } else if (!right) {
            return [cur];
        }

        return result;
    }
};
