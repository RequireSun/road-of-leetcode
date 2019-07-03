/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var temp;
    var result = [];

    if (nums2.length > nums1.length) {
        temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }

    // nums1.sort();

    for (let i = 0, l = nums2.length; i < l; ++i) {
        temp = nums1.indexOf(nums2[i]);

        if (-1 < temp) {
            result.push(nums2[i]);
            nums1[temp] = -1;
        }
    }

    return result;
};
