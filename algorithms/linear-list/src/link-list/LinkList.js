const doublePointer = require("./insert/double-pointer");
const LinkBaseList = require("./base/LinkBaseList");
const LinkNode = require('./base/LinkNode');

class LinkList extends LinkBaseList {
    constructor(values = []) {
        super(values);
        this.head = initLinkList(this.values);
    }

    get list() {
        return new LinkList(this.values);
    }

    insert(type, ind, val) {
        if(ind > this.length) {
            console.error('！错误：插入下标超过数组长度。');
            return;
        }
        const insert = require(`./insert/${type}`);
        insert(this.list, ind, val);
    }
}

function initLinkList(values) {
    let head, prev;
    for(let value of values) {
        let node = new LinkNode(value);
        head ??= node;
        if (prev) {
            prev.next = node;
        }
        prev = node;
    }
    return head;
}

module.exports = LinkList;