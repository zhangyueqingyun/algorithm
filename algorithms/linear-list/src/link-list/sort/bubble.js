function bubbleSort(list) {
    let {head} = list;
    let flag;
    while(flag !== head.next) {
        if(head.value > head.next.value) {
            const temp = head;
            head = head.next;
            temp.next = head.next;
            head.next = temp;
        }
        let prev = head;
        while (prev?.next?.next && prev.next.next !== flag) {
            if(prev.next.value > prev.next.next.value) {
                const current = prev.next;
                prev.next = current.next;
                current.next = prev.next.next;
                prev.next.next = current;
            }
            prev = prev.next;
        }
        flag = prev.next;
    }
    list.head = head;
    return list;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("bubbleSort", bubbleSort);