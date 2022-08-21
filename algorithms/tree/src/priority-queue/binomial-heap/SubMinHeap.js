const Node = require('./Node');
class SubMinHeap {
    constructor(root, degree) {
        this.root = root;
        this.degree = degree;
        this.next = null;
    }

    delete() {
        const subMinHeapA = new SubMinHeap();
        const subMinHeapB = new SubMinHeap();
        
        return [subMinHeapA, subMinHeapB,]
    }
}

module.exports = SubMinHeap;