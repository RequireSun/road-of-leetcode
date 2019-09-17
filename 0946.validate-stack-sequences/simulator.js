/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];

    for (let i = 0, l = pushed.length, index = 0; i < l; ++i) {
        stack.push(pushed[i]);

        while (stack.length && stack[stack.length - 1] === popped[index]) {
            stack.pop();
            ++index;
        }
    }

    return stack.length === 0;
};
