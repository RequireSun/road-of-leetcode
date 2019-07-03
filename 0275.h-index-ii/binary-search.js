/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const length = citations.length;
    let left = 0, right = length - 1;
    let mid = 0, count;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        count = length - mid;

        if (citations[mid] < count) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return length - left;
};
