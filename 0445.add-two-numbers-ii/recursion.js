/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let ll1 = calcLength(l1);
    let ll2 = calcLength(l2);

    const longThan2 = ll1 - ll2;

    const carry = add(l1, l2, longThan2);

    let result = longThan2 > 0 ? l1 : l2;

    if (carry) {
        result = {
            val: 1,
            next: result,
        };
    }

    return result;
};

var calcLength = function (list) {
    if (!list) {
        return 0;
    }
    return calcLength(list.next) + 1;
};

var add = function (l1, l2, longThan2) {
    if (!l1 || !l2) {
        return 0;
    }

    if (0 < longThan2) {
        const val = l1.val + add(l1.next, l2, longThan2 - 1);
        l1.val = val % 10;
        return val >= 10 ? 1 : 0;
    } else if (0 > longThan2) {
        const val = l2.val + add(l1, l2.next, longThan2 + 1);
        l2.val = val % 10;
        return val >= 10 ? 1 : 0;
    } else {
        const val = l1.val + l2.val + add(l1.next, l2.next);
        l1.val = l2.val = val % 10;
        return val >= 10 ? 1 : 0;
    }
};
