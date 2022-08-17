function detectCycleByExhaustion(list) {
    const {head} = list;
    let index = 0;
    let current = head;
    while(current) {
        let pointer = head;
        let i = 0;
        while (i < index) {
            if(pointer === current) {
                return 'has cycle';
            }
            pointer = pointer.next;
            i++;
        }
        current = current.next;
        index++;
    }
    return 'no cycle';
}

const {performance} = require('@z-algorithm/core');
module.exports = {
    raw: detectCycleByExhaustion,
    performance: performance("detect-cycle-exhaustion", detectCycleByExhaustion)
};