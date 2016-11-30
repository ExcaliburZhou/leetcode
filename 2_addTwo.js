/**
 * Created by Excalibur on 16/11/30.
 */
//You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
//    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var jin = 0;
    var res = [];
    var sum;
    do{
        l1 = l1 || {val: 0};
        l2 = l2 || {val: 0};
        sum = l1.val + l2.val + jin;
        if(sum >= 10){
            jin = 1;
            res.push(sum % 10);
        }else {
            jin = 0;
            res.push(sum);
        }
        l1 = l1.next;
        l2 = l2.next;
    }while(l1 || l2);
    if(jin === 1) res.push(1);
    return res;
};
