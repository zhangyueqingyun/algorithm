function insertionSort (list) {
    let {head} = list;

    let prev = head;
    while(prev.next) {
        const currrent = prev.next;
        if(head.value >= currrent.value){
            prev.next = currrent.next;
            currrent.next = head;
            head = currrent;
        } else {
            let cursor = head;
            let i = 0;
            while(cursor.next !== currrent && cursor.next.value <= currrent.value) {
                cursor = cursor.next;
                i++;
            }
            if(cursor.next !== currrent) {
                prev.next = currrent.next;
                currrent.next = cursor.next;
                cursor.next = currrent;
            } else {
                prev = prev.next;
            }
        }
    }
    list.head = head;
    return list;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("insertion-sort", insertionSort);