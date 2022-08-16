const {BaseList} = require("@z-algorithm/core");

class LinkBaseList extends BaseList {
    get value() {
        return Array.from(this).join(',');
    }

    [Symbol.toPrimitive]() {
        return Array.from(this).join(',');
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node.value;
            node = node.next;
        }
    }
}

module.exports = LinkBaseList;