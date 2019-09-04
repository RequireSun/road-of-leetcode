/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    const array = [];
    const result = [];
    let cur = root;

    while (cur) {
        array.push(cur);
        cur = cur.next;
    }

    const length = array.length;
    const each = Math.floor(length / k);
    let plus1 = length - each * k;
    let targetLength;

    for (let i = 0; i < length;) {
        targetLength = each + (plus1 ? 1 : 0);
        result.push(array[i]);
        if (i > 0) {
            array[i - 1].next = null;
        }
        if (plus1) {
            --plus1;
        }
        i += targetLength;
    }

    while (result.length < k) {
        result.push(null);
    }

    return result;
};
