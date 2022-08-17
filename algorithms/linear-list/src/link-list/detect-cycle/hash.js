function detectCycleByHash(list) {
    const hash = {};
    let current = list.head;

    while (current) {
        if(hash[current]) {
            return 'has cycle';
        }
        hash[current] = true;
        current = current.next;
    }   

    return 'no cycle';
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("detect-cycle-hash", detectCycleByHash);