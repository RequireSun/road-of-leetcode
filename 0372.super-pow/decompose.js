/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var base = 1337;

/**
 * 求 a^b % base 的结果 (b > 10)
 * 小于等于 10 的时候相当于 powMod
 */
var superPow = function(a, b) {

    if (!b.length) {
        return 1;
    }

    var c = b.pop();

    //   a^bcde % base
    // =            (a^bcd0 % base)(a^e % base) % base
    // = ((a^bcd)^10 % base)(a^e % base) % base
    return powMod(superPow(a, b), 10) * powMod(a, c) % base;
};

/**
 * 求 a^b % base 的结果 (0 < b <= 10)
 *   a^b % b
 * =                             (a^(b-1) % k)(a % k) % k
 * =              ((a^(b - 2) % k)(a % k) % k)(a % k) % k
 * = (((a^(b - 3) % k)(a % k) % k)(a % k) % k)(a % k) % k
 * c = a % k
 * = ((((cc % k)c % k)c % k)c % k)c % k
 */
var powMod = function(a, b) {
    a %= base;
    var res = 1;

    for (var i = 0; i < b; ++i) {
        res = res * a % base;
    }

    return res;
}
