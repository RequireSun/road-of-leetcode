/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    const map = new Array(quiet.length);

    for (let i = 0, l = richer.length; i < l; ++i) {
        if (!map[richer[i][1]]) {
            map[richer[i][1]] = new Set();
        }
        map[richer[i][1]].add(richer[i][0]);
    }

    const result = [];

    for (let i = 0, l = quiet.length; i < l; ++i) {
        const richers = new Set();
        const todos = new Set(map[i]);
        let mostQuiet = i;

        while (todos.size) {
            for (const name of todos) {
                todos.delete(name);

                if (undefined !== result[name]) {
                    if (quiet[result[name]] < quiet[mostQuiet]) {
                        mostQuiet = result[name];
                    }
                } else {
                    richers.add(name);

                    if (map[name]) {
                        for (const moreRicher of map[name]) {
                            if (undefined !== result[moreRicher]) {
                                if (quiet[result[moreRicher]] < quiet[mostQuiet]) {
                                    mostQuiet = result[moreRicher];
                                }
                            } else if (!richers.has(moreRicher) && !todos.has(moreRicher)) {
                                todos.add(moreRicher);
                            }
                        }
                    }
                }
            }
        }

        for (const name of richers) {
            if (quiet[name] < quiet[mostQuiet]) {
                mostQuiet = name;
            }
        }

        result.push(mostQuiet);
    }

    return result;
};
