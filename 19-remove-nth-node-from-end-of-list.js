/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    const newHead = new ListNode(0, head);
    let current = head;
    let beforeTarget = newHead;
    let gap = 0;
    while(current) {
        current = current.next;
        if (gap === n) {
            beforeTarget = beforeTarget.next;
        } else {
            gap++;
        }
    }
    if (gap === n) {
        // delete target
        beforeTarget.next = beforeTarget.next.next;
    }
    return newHead.next;
};