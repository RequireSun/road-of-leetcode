/**
 * @param {number} price
 * @return {number}
 */
class StockSpanner {
    stack = [];
    length = 0;

    /**
     * Your StockSpanner object will be instantiated and called as such:
     * var obj = new StockSpanner()
     * var param_1 = obj.next(price)
     */
    next(price) {
        var stack = this.stack;
        var i = this.length - 2;
        var res = 1;

        while (i > -1 && stack[i] <= price) {
            res += stack[i + 1];
            i -= 2;
        }
        stack[i + 2] = price;
        stack[i + 3] = res;
        this.length = i + 4;

        return res;
    }
}
