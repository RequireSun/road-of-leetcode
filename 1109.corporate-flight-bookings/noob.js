/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const result = [];

    for (let i = 0; i < n; ++i) {
        result.push(0);
    }

    for (let i = 0, l = bookings.length; i < l; ++i) {
        for (let j = bookings[i][0] - 1, k = bookings[i][1]; j < k; ++j) {
            result[j] += bookings[i][2];
        }
    }

    return result;
};
