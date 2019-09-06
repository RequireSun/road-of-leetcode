/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    switch (n) {
        case 0:
        case 1:
        case 2:
            return n;
    }

    let last2 = 0;
    let last1 = 1;

    while (n--) {
        last2 ^= last1;
        last1 ^= last2;
        last2 ^= last1;
        last1 += last2;
    }

    return last1;
};
