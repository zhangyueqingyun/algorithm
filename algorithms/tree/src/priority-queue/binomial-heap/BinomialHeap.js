const SubMinHeap = require('./SubMinHeap');
const Node = require('./Node');
const merge = require('./merge');

class BinomialHeap {
    constructor(values)  {
        for(let value of values) {
            this.enqueue(value);
        }
    }

    enqueue(value) {
        let heap = new SubMinHeap(new Node(value), 0, this.list);
        heap.next = this.heap;
        this.heap = merge(heap);
    }
}

module.exports = BinomialHeap;