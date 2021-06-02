/**
 * @param {number} price
 * @return {number}
 */
class StockSpanner {
    arr = [];
    cons = [];

    /**
     * Your StockSpanner object will be instantiated and called as such:
     * var obj = new StockSpanner()
     * var param_1 = obj.next(price)
     */
    next(price) {
        var arr = this.arr;
        var cons = this.cons;
        var cursor, temp;

        arr.push(price);
        if (arr.length === 1 || arr[arr.length - 2] > price) {
            cons.push(1);
            return 1;
        } else {
            cursor = arr.length - 2;
            while (arr[cursor] <= price) {
                cursor -= cons[cursor];
            }
            temp = arr.length -1 - cursor;
            cons.push(temp);
            return temp;
        }
    }
}
