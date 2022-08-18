const initLinkList = require('./base/initLinkList');
const LinkNode = require('./base/LinkNode');
const LinkBaseList = require('./base/LinkBaseList');
class Queue extends LinkBaseList{
    constructor (values = []) {
        super();
        const {head, rear} = initLinkList(values);
        this.head = head;
        this.rear = rear;
    }

    enqueue(val) {
        const node = new LinkNode(val);
        if(!this.rear) {
            this.rear = this.head = node;
        } else {
            this.rear.next = node;
        }
    }

    dequeue(val) {
        const node = this.head;
        if(this.head === this.rear) {
            this.head = this.rear = null;
        } else {
            this.head = node.next;
        }
        return node;
    }
}

module.exports = Queue;