/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const map = new Map();

    for (let i = 0, l = pushed.length; i < l; ++i) {
        map.set(pushed[i], i);
    }

    for (let i = 0, l = popped.length; i < l; ++i) {
        popped[i] = map.get(popped[i]);
    }

    for (let i = 0, l = popped.length; i < l; ++i) {
        if (!checkFront(popped, i)) {
            return false;
        }
    }
    return true;
};

function checkFront(popped, index) {
    const cur = popped[index];
    const bigger = [];

    for (let i = 0; i < index; ++i) {
        if (popped[i] > cur) {
            bigger.push(popped[i]);
        }
    }

    if (!bigger.length) {
        return true;
    }

    bigger.sort((a, b) => a - b);

    for (let i = 0, l = bigger.length; i < l; ++i) {
        if (bigger[i] !== cur + i + 1) {
            return false;
        }
    }

    return true;
}
