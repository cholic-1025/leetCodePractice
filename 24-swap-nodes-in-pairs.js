/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if (!head) return head;
    const newHead = new ListNode(0, head);
    let prev = newHead;
    let current = head;
    let next = head.next;
    while(current && next) {
        prev.next = next;
        current.next = next.next;
        next.next = current;
        
        prev = current;
        current = prev.next;
        next = current ? current.next : null;
    }
    return newHead.next;
};