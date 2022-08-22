const Node = require('../Node');

function loopInsert(root, value) {
    const node = new Node(value);
    let next = root; 
    while(next) {
        const attr = value > next.value ? 'right' : 'left';
        if(!next[attr]) {
            next[attr] = node;
            next = null;
        } else {
            next = next[attr];
        } 
    }
    return node;
}

module.exports = loopInsert;