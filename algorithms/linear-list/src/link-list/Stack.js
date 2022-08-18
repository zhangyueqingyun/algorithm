const LinkNode = require('./base/LinkNode');
const LinkBaseList = require('./base/LinkBaseList');

class Stack extends LinkBaseList{
    constructor (values = []) {
        super();
        const top = initStack(values);
        this.head = top;
    }

    push(val) {
        const node = new LinkNode(val);
        node.next = this.head;
        this.head = node;
    }

    pop(val) {
        const node = this.head;
        this.head = node?.next;
        return node;
    }
}

function initStack(values) {
    let top;
    for(let value of values) {
        let node = new LinkNode(value);
        if(!top) {
            top = node;
        } else {
            node.next = top;
            top = node;
        }
    }
    return top;
}

module.exports = Stack;