function doublePointerInsertion(list, index, value) {
    const {head, length} = list
    if(index > length) return; 
    
    const LinkNode = require('../base/LinkNode');
    const node = new LinkNode(value);
    
    let i = 0,
        current,
        next = head;

    while(next && index !== i){
        current = next;
        next = next?.next;
        i++;
    }
    
    node.next = next;
    if(current) {
        current.next = node;
    } else {
        list.head = node;
    }

    return list;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("double-pointer-insertion", doublePointerInsertion, (ind, val) => {
    return `insert(index = ${ind} , value = ${val})`
});