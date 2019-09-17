/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    target = Math.abs(target);
    let step = 0;
    let total = 0;
    while (total < target || (total - target) % 2) {
        total += ++step;
    }
    return step;
};
