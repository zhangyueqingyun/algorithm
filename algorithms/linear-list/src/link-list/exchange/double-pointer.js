function exchangeByDoublePointer(list, indexA, indexB) {
    const {head} = list;
    const max = Math.max(indexA, indexB),
        min = Math.min(indexA, indexB)
    
    if(min === 0) {
        let prev = head, i = 1;
        while(prev && i++ < max) {
            prev = prev.next;
        }
        const next = prev.next.next;
        list.head = prev.next;
        list.head.next = head.next;
        prev.next = head;
        head.next = next;
    } else {
        let diff =  max - min;
        let prevMax = head, prevMin = head, i = 1;
        while(prevMax && i <= diff) {
            prevMax = prevMax.next;
            i++;
        }
        
        while(prevMax && i < max) {
            prevMax = prevMax.next;
            prevMin = prevMin.next;
            i++;
        }
        
        const curMax = prevMax.next;
        const nextMin = prevMin.next.next;
        prevMin.next.next = curMax.next;
        curMax.next = nextMin;
        prevMax.next = prevMin.next;
        prevMin.next = curMax;
    }

    return list;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("exchange-double-pointer", exchangeByDoublePointer, (indA, indB) => `exchange(${indA}, ${indB})`);