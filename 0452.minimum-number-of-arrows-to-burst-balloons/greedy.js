/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (!points.length) {
        return 0;
    }
    points.sort((a, b) => a[1] - b[1]);

    let result = 1;

    for (let i = 1, point = points[i], shotPos = points[0][1]; point = points[i]; ++i) {
        if (shotPos < point[0]) {
            ++result;
            shotPos = point[1];
        }
    }

    return result;
};
