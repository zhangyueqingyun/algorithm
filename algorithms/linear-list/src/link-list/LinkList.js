const LinkBaseList = require("./base/LinkBaseList");
const setCycle = require('./base/setCycle');
const initLinkList = require('./base/initLinkList');

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

module.exports = LinkList;