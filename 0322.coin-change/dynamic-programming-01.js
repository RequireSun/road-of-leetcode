/**
 * 题目也没说, 不过假设 coins 数组是递增的
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const amounts = new Array(amount + 1);
    
    amounts[0] = 1;
    
    for (let i = 1; i <= amount; ++i) {
        amounts[i] = 1000;
    }
    
    // 每次增加一种类型的硬币
    for (let i = coins.length - 1; i >= 0; --i) {
        // 遍历已有位置
        for (let j = amount; j >= 0; --j) {
            if (amounts[j] < 1000) {
                // 当前位置 + n * 当前面额, 全部设置为 true
                for (let multiple = 1, cur; (cur = coins[i] * multiple + j) <= amount; ++multiple) {
                    if (amounts[cur] > amounts[j] + multiple) {
                        amounts[cur] = amounts[j] + multiple;
                    }
                }
            }
        }
    }
    
    if (amounts[amount] < 1000) {
        return amounts[amount] - 1;
    }

    return -1;
};