const LinkNode = require('./LinkNode');

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

module.exports = initLinkList;