/**
 * Created by Excalibur on 17/1/3.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var i = 0;
    var link = head;
    while(link) {
        link = link.next;
        i++
    }
    link = head;
    if(n === i){
        link = link.next;
    }else {
        i -=(n + 1);
        while(i){
            link = link.next;
            i--;
        }
        link.next = link.next.next;
    }
    return head;
};