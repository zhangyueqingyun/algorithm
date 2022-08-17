const doublePointer = require("./insert/double-pointer");
const LinkBaseList = require("./base/LinkBaseList");
const LinkNode = require('./base/LinkNode');

class LinkList extends LinkBaseList {
    constructor(values = []) {
        super(values);
        this.head = initLinkList(this.values);
        this.cycle = false;
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

    delete(type, ind) {
        if(ind > this.length) {
            console.error('！错误：插入下标超过数组长度。');
        }
        
        const del = require(`./delete/${type}`);
        del(this.list, ind);
    }

    exchange(type, indA, indB) {
        const exchange = require(`./exchange/${type}`);
        exchange(this.list, indA, indB);
    }

    detectCycle(type, cycleIndex) {
        const detectCycle = require(`./detect-cycle/${type}`).performance;
        detectCycle(setCycle(this.list, cycleIndex));
    }
}

function setCycle(list, index) {
    if(index === -1) return list;
    let current = list.head, i = 0;
    while(current && index !== i) {
        current = current.next;
        i++;
    }
    let target = current;
    while(current.next){
        current = current.next;
        i++;
    }
    current.next = target;
    list.hasCycle = true;
    list.cyclePrintLength = (i + 1) * 2;
    return list;
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