/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    const index = new Uint16Array(primes.length);
    const ugly = [1];

    for (let i = 1, l = primes.length; i < n; ++i) {
        ugly.push(Number.MAX_SAFE_INTEGER);
        for(let j = 0; j < l; ++j) {
            ugly[i] = Math.min(ugly[i], ugly[index[j]] * primes[j]);
        }
        for(let j = 0; j < l; ++j) {
            index[j] += (ugly[i] === ugly[index[j]] * primes[j]);
        }
    }
    return ugly[n - 1];
};
