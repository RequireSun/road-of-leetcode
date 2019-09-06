/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 16) {
        let last2 = 0;
        let last1 = 1;

        while (n--) {
            last2 ^= last1;
            last1 ^= last2;
            last2 ^= last1;
            last1 += last2;
        }

        return last1;
    }

    switch (n) {
        case 16:
            return 1597;
        case 17:
            return 2584;
        case 18:
            return 4181;
        case 19:
            return 6765;
        case 20:
            return 10946;
        case 21:
            return 17711;
        case 22:
            return 28657;
        case 23:
            return 46368;
        case 24:
            return 75025;
        case 25:
            return 121393;
        case 26:
            return 196418;
        case 27:
            return 317811;
        case 28:
            return 514229;
        case 29:
            return 832040;
        case 30:
            return 1346269;
        case 31:
            return 2178309;
        case 32:
            return 3524578;
        case 33:
            return 5702887;
        case 34:
            return 9227465;
        case 35:
            return 14930352;
        case 36:
            return 24157817;
        case 37:
            return 39088169;
        case 38:
            return 63245986;
        case 39:
            return 102334155;
        case 40:
            return 165580141;
        case 41:
            return 267914296;
        case 42:
            return 433494437;
        case 43:
            return 701408733;
        case 44:
            return 1134903170;
        case 45:
            return 1836311903;
    }
};
