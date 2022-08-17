function singlePointerInsertion(list, index, value) {
    const {head, length} = list;

    const LinkNode = require('../base/LinkNode');
    const node = new LinkNode(value);

    if(index === 0) {
        node.next = head;
        list.head = node;
    } else {
        let i = 1,
            prev = head;

        while(prev?.next && i !== index) {
            prev = prev.next;
            i++;
        }

        if(prev && i == index) {
            node.next = prev.next;
            prev.next = node;
        }
    }
    return list;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("single-pointer-insertion", singlePointerInsertion, (ind, val) => {
    return `insert(index = ${ind} , value = ${val})`
});