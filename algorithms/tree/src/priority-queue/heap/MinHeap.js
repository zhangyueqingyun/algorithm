const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();
const BaseHeap = require('./base/BaseHeap');

class MinHeap extends BaseHeap {
    get heap () {
        return this.values.sort((a, b) => (a - b));
    }

    enqueue(value) {
        perf.start('min-heap-enqueue', this.values);
        
        const heap = this.heap;
        let i = heap.length;
        heap[i] = value;

        while(i) {
            const parentIndex = Math.floor((i - 1) / 2);
            const parentValue = heap[parentIndex];
            if(value >= parentValue) {
                break;
            }
            heap[i] = parentValue;
            heap[parentIndex] = value;
            i = parentIndex;
        }
        
        perf.end('min-heap-enqueue', heap);
        perf.print('min-heap-enqueue');
    }

    dequeue() {
        perf.start('min-heap-dequeue', this.values);

        const heap = this.heap;
        const value = heap[0];

        heap[0] = heap[heap.length - 1];
        heap.pop();

        const {length} = heap;
        let parentIndex = 0;
        let leftIndex = 2 * parentIndex + 1;
        let rightIndex = leftIndex + 1;
            
        while(leftIndex < length) {
            let minIndex = (rightIndex < length && heap[leftIndex] > heap[rightIndex]) ? rightIndex : leftIndex;
            const temp = heap[minIndex];
            heap[minIndex] = heap[parentIndex];
            heap[parentIndex] = temp;
            parentIndex = minIndex;
            leftIndex = 2 * parentIndex + 1;
        }
        
        perf.end('min-heap-dequeue', `${value} : ${heap}`);
        perf.print('min-heap-dequeue');

        return value;
    }
}

module.exports = MinHeap;