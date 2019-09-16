/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const array = new Int32Array(n + 1);

    for (let i = 0; i <= n; ++i) {
        array[i] = 0;
    }

    for (let i = 0, l = bookings.length; i < l; ++i) {
        array[bookings[i][0] - 1] += bookings[i][2];
        array[bookings[i][1]] -= bookings[i][2];
    }

    const result = new Uint32Array(n);

    for (let i = 0, cur = 0; i < n; ++i) {
        cur += array[i];
        result[i] = cur;
    }

    return result;
};
