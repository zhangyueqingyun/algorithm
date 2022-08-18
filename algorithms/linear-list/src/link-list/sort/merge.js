function mergeSort(list) {
    const {head} = list;
    list.head = mergeSortImpl(head);
    return list;
}

function mergeSortImpl(head, tail) {
    if(head === tail) {
        head && (head.next = null);
        return head;
    }
    
    let fast = head, slow = head;
    while(fast?.next?.next && fast?.next !== tail && fast?.next?.next !== tail) {
        fast = fast?.next?.next;
        slow = slow?.next;
    }
    const slowNext = slow.next
    const headA = mergeSortImpl(head, slow);
    const headB = mergeSortImpl(slowNext, tail);
    return merge(headA, headB);
}

function merge(curA, curB) {
    let head = {}
    let pointer = head;
    while(curA && curB) {
        let smaller;
        if(curA.value > curB.value) {
            smaller = curB;
            curB = curB.next;
        } else {
            smaller = curA;
            curA = curA.next;
        }
        pointer.next = smaller;
        pointer = pointer.next;
    }
    curA && (pointer.next = curA);
    curB && (pointer.next = curB);
    return head.next;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("merge-sort", mergeSort);