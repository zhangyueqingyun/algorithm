const LinkNode = require('./base/LinkNode');
const LinkBaseList = require('./base/LinkBaseList');

class Stack extends LinkBaseList{
    constructor (values = []) {
        super(values);
        this.top = initStack(values);
    }

    get head() {
        return this.top;
    }

    push(val) {
        const node = new LinkNode(val);
        node.next = this.top;
        this.top = node;
    }

    pop(val) {
        const node = this.top;
        this.top = node?.next;
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