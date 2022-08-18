function bucketSort (list) {
    const {head} = list;
    
    let max = head.value,
        min = head.value,
        current = head;
    
    while (current) {
        const {value} = current;
        if (value > max) 
            max = value;
        if (value < min) 
            min = value;
        current = current.next;
    }

    const bucketNum = 6;
    const buckets = [{head: null}, {head: null}, {head: null}, {head: null}, {head: null}, {head: null}];
    const interval = (max - min) / (bucketNum - 1);

    current = head;
    while(current) {
        let next = current.next;
        const bucket = buckets[Math.floor((current.value - min) / interval)];
        if(!bucket.head) {
            bucket.head = current;
            current.next = null;
        } else if (bucket.head.value > current.value) {
            current.next = bucket.head;
            bucket.head = current;
        } else {
            let prev = bucket.head;
            while(prev?.next && prev.next.value < current.value) {
                prev = prev.next;
            }
            current.next = prev.next;
            prev.next = current;
        }
        current = next;
    }

    list.head = buckets.reduce(function (last, current) {
        if(!last?.head) return current;
        let node = last.head;
        while(node?.next) {
            node = node.next;
        }
        node.next = current.head;
        return last;
    }).head;
    
    return list;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("bucket-sort", bucketSort);