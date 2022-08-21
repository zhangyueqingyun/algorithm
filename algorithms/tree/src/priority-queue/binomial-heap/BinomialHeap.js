const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();

const SubMinHeap = require('./SubMinHeap');
const Node = require('./Node');
const merge = require('./merge');

class BinomialHeap {
    constructor(values)  {
        this.values = values;
        for(let value of values) {
            this.enqueue(value);
        }
    }

    enqueue(value) {
        let heap = new SubMinHeap(new Node(value), 0, this.list);
        heap.next = this.heap;
        this.heap = merge(heap);
    }

    dequeue() {
        const perfName = `binomial-heap-dequeue`;
        perf.start(perfName, this.values);

        let heap = this.heap;
        let minHeap = heap;
       
        while(heap) {
            if(heap.root.value < minHeap.root.value) {
                minHeap = heap;
            }
            heap = heap.next;
        }

        heap = this.heap;

        if(minHeap === heap) {
            heap = minHeap.next;
        } else {
            let prev = heap;
            while(prev?.next && prev.next !== minHeap) {
                prev = prev.next;
            }
            prev.next = minHeap.next;
        }
        
        const node = minHeap.root;

        let lSubHeap, rSubHeap;
        if(minHeap.degree > 0) {
            lSubHeap = new SubMinHeap(node.firstChild, minHeap.degree - 1, heap);
        } 
        if (minHeap.degree > 1) {
            rSubHeap = new SubMinHeap(node.firstChild.sibling, minHeap.degree - 2, lSubHeap);
        }
        heap = rSubHeap || lSubHeap;
        
        this.heap = merge(heap);

        const {value} = node;
        perf.end(perfName, value);
        perf.print(perfName);
        return value;
    }
}

module.exports = BinomialHeap;