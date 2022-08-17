const detectCycle = require('../detect-cycle/fast-slow-pointer').raw;

function detectIntersection(listA, listB) {
    const hasCycleA = detectCycle(listA) === 'has cycle',
        hasCycleB = detectCycle(listB) === 'has cycle';

    if(hasCycleA && !hasCycleB || !hasCycleA && hasCycleB) {
        return 'no intersection';
    }
    if(hasCycleA && hasCycleB) {
        const entryA = getCycleEntry(listA);
        const entryB = getCycleEntry(listB);
        
        let fast = entryA;
        let slow = entryB;
        do {
            fast = fast.next.next;
            slow = slow.next;
        } while (fast !== entryA && fast !== slow);

        if(fast === slow) 
            return 'intersection';
        else 
            return 'non intersection';
    } else {
        const hashA = {};
        const hashB = {};
        
        let nodeA = listA.head,
            nodeB = listB.head;
        
        do {
            nodeA = nodeA?.next;
            nodeB = nodeB?.next;

            nodeA && (hashA[nodeA] = true);
            nodeB && (hashB[nodeB] = true);

            if(hashA[nodeB] || hashB[nodeA]) {
                return 'intersection';  
            }
        } while (nodeA || nodeB)

        return 'non-intersection';
    }
}

function getCycleEntry(list) {
    let {head} = list;
    
    let fast = head,
        slow = head;
    
    do {        
        fast = fast.next.next;
        slow = slow.next;
    } while (fast !== slow);
    
    fast = head;

    while(fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
}

const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();

module.exports = {
    raw: detectIntersection,
    performance: function (listA, listB) {
        perf.start("detect-intersection",`${listA} | ${listB}`);
        perf.end("detect-intersection", detectIntersection(listA, listB));
        perf.print("detect-intersection");
    }
}