/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let num = 0;
    let prevSign = '+';
    let temp;

    for (let i = 0, l = s.length; i < l; ++i) {
        switch (s[i]) {
            case '+':
            case '-':
            case '*':
            case '/': {
                switch (prevSign) {
                    case '+': {
                        stack.push(num);
                        break;
                    }
                    case '-': {
                        stack.push(-num);
                        break;
                    }
                    case '*': {
                        stack.push(stack.pop() * num);
                        break;
                    }
                    case '/': {
                        temp = stack.pop() / num;
                        stack.push(temp > 0 ? Math.floor(temp) : Math.ceil(temp));
                        break;
                    }
                }
                prevSign = s[i];
                num = 0;
                break;
            }
            case ' ': {
                break;
            }
            default: {
                num = num * 10 + +s[i];
                break;
            }
        }
    }

    switch (prevSign) {
        case '+': {
            stack.push(num);
            break;
        }
        case '-': {
            stack.push(-num);
            break;
        }
        case '*': {
            stack.push(stack.pop() * num);
            break;
        }
        case '/': {
            temp = stack.pop() / num;
            stack.push(temp > 0 ? Math.floor(temp) : Math.ceil(temp));
            break;
        }
    }

    console.log(stack);

    let result = 0;

    for (let i = 0, l = stack.length; i < l; ++i) {
        result += stack[i];
    }

    return result;
};
