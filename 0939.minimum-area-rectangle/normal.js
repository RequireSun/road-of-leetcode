/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    const matrix = new Map();
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0, point = points[i]; point = points[i]; ++i) {
        const [x2, y2] = point;
        if (!matrix.has(x2)) {
            matrix.set(x2, new Set([y2]));
        } else {
            for (const [x1, ys] of matrix) {
                if (x1 === x2) {
                    continue;
                }

                for (const y1 of ys) {
                    if (y1 === y2) {
                        continue;
                    }

                    if (matrix.get(x1).has(y2) && matrix.get(x2).has(y1)) {
                        min = Math.min(min, Math.abs(x2 - x1) * Math.abs(y2 - y1));
                    }
                }
            }

            matrix.get(x2).add(y2);
        }
    }

    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};
