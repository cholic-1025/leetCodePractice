/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    const newHead = new ListNode(0, head);
    let current = newHead;
    while(current) {
        const next = current.next;
        if (next && next.val === val) {
            current.next = next.next;
        } else {
            current = current.next;
        }
    }
    return newHead.next;
};