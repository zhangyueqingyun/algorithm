const Node = require('./Node');
class SubMinHeap {
    constructor(root, degree, next) {
        this.root = root;
        this.degree = degree;
        this.next = next;
    }

    delete() {
        const subMinHeapA = new SubMinHeap();
        const subMinHeapB = new SubMinHeap();
        
        return [subMinHeapA, subMinHeapB,]
    }
}

module.exports = SubMinHeap;