function doublePointerInsertion(list, ind, val) {
    const {head, length} = list
    if(ind > length) return; 
    
    let i = 0,
        current,
        next = head;

    while(next && ind !== i){
        current = next;
        next = next?.next;
        i++;
    }

    const LinkNode = require('../base/LinkNode');
    const node = new LinkNode(val);
    
    node.next = next;
    if(current) {
        current.next = node;
    } else {
        list.head = node;
    }

    return list;
}

const performance = require('./performance');
module.exports = performance("double-pointer-insertion", doublePointerInsertion);