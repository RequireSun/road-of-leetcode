/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (!intervals.length) {
        return 0;
    }

    intervals.sort((a, b) => {
        return a[1] - b[1];
    });

    let count = 1;
    let end = intervals[0][1];

    for (let i = 1, l = intervals.length; i < l; ++i) {
        if (intervals[i][0] >= end) {
            ++count;
            end = intervals[i][1];
        }
    }

    return intervals.length - count;
};
