function singlePointerDelete(list, index) {
    const {head} = list;

    if(index == 0) {
        list.head = head?.next;
        return list;
    }
    let i = 1,
        prev = head;
    
    while(prev?.next && i !== index) {
        prev = prev?.next;
        i++;
    }

    if(prev && i == index) {
        prev.next = prev?.next?.next;
    }

    return list;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("single-pointer-delete", singlePointerDelete, (ind) => {
    return `delete(index = ${ind})`
});