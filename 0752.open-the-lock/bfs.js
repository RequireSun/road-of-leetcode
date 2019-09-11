/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const denied = new Set(deadends);
    if (denied.has('0000')) {
        return -1;
    }
    denied.add('0000');
    let todos = new Set(['0000']);
    let newTodos = new Set();
    let result = 0;

    while (todos.size) {
        ++result;
        const t = target;

        for (const todo of todos) {
            for (let i = 0; i < 4; ++i) {
                const pref = todo.substr(0, i);
                const subf = todo.substr(i + 1);

                const str1 = `${pref}${(+todo[i] + 1) % 10}${subf}`;

                if (str1 === t) {
                    return result;
                } else if (!denied.has(str1)) {
                    newTodos.add(str1);
                    denied.add(str1);
                }

                const str2 = `${pref}${(+todo[i] + 9) % 10}${subf}`;

                if (str2 === t) {
                    return result;
                } else if (!denied.has(str2)) {
                    newTodos.add(str2);
                    denied.add(str2);
                }
            }
        }

        let temp = todos;
        todos = newTodos;
        newTodos = temp;
        newTodos.clear();
    }

    return -1;
};
