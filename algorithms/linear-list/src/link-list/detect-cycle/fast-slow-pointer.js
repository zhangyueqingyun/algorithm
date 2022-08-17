function detectCycleByFastSlowPointer(list) {
    const {head} = list;
    let fast = head, slow = head;
    
    while (fast) {
        fast = fast?.next?.next;
        slow = slow.next;
        if(fast === slow) {
            return 'has cycle';
        }
    }

    return 'no cycle';
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("detect-cycle-fast-slow-pointer", detectCycleByFastSlowPointer);