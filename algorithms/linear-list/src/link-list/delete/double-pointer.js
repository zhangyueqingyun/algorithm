function doublePointerDelete(list, index) {
    const {head} = list;
    let i = 0,
        prev,
        cur = head;
        
    while(cur && i !== index){
        prev = cur;
        cur = cur.next;
        i++;
    }

    if(prev && cur) {
        prev.next = cur.next;
        cur.next = null;
    } else if (!prev && cur) {
        list.head = cur.next;
        cur.next = null;
    }
    return list;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("double-pointer-delete", doublePointerDelete, (ind, val) => {
    return `delete(index = ${ind})`
});