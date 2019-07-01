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
    let stack1 = [];
    let stack2 = [];
    let cur1 = l1;
    let cur2 = l2;
    let temp;

    while (cur1 && cur2) {
        stack1.push(cur1.val);
        stack2.push(cur2.val);

        cur1 = cur1.next;
        cur2 = cur2.next;
    }

    if (cur2) {
        temp = stack1;
        stack1 = stack2;
        stack2 = temp;

        temp = cur1;
        cur1 = cur2;
        cur2 = temp;

        temp = l1;
        l1 = l2;
        l2 = temp;
    }

    while (cur1) {
        stack1.push(cur1.val);
        cur1 = cur1.next;
    }

    cur1 = l1;
    let carry = 0;
    let prev = undefined;

    for (let i = 0, l = stack1.length; i < l; ++i) {
        cur1.val = stack1.pop() + (stack2.pop() || 0) + carry;

        if (10 <= cur1.val) {
            carry = 1;
            cur1.val = cur1.val % 10;
        } else {
            carry = 0;
        }

        temp = cur1;
        cur1 = cur1.next;
        temp.next = prev;
        prev = temp;
    }

    if (carry) {
        prev = {
            val: 1,
            next: prev,
        };
    }

    return prev;
};
