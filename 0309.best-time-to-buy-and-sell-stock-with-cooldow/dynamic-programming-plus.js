/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sell = 0;
    let prev_sell = 0;
    let buy = Number.MIN_SAFE_INTEGER;
    let prev_buy;
    for (let i = 0, price = prices[i]; price!== undefined; price = prices[++i]) {
        prev_buy = buy;
        buy = Math.max(prev_sell - price, prev_buy);
        prev_sell = sell;
        sell = Math.max(prev_buy + price, prev_sell);
    }
    return sell;
};
