/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const s0 = [];
    const s1 = [];
    const s2 = [];

    s0.push(0);
    s1.push(-prices[0]);
    s2.push(Number.MIN_SAFE_INTEGER);

    for (let i = 1, price = prices[i]; undefined !== price; price = prices[++i]) {
        s0.push(Math.max(s0[i - 1], s2[i - 1]));
        s1.push(Math.max(s1[i - 1], s0[i - 1] - prices[i]));
        s2.push(s1[i - 1] + prices[i]);
    }

    return Math.max(s0[s0.length - 1], s2[s2.length - 1]);
};
