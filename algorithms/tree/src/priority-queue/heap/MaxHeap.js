const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();
const BaseHeap = require('./base/BaseHeap');

class MinHeap extends BaseHeap {
    get heap () {
        return this.values.sort((a, b) => (b - a));
    }

    enqueue(value) {
        perf.start('max-heap-enqueue', this.values);
        
        const heap = this.heap;
        let i = heap.length;
        heap[i] = value;

        while(i) {
            const parentIndex = Math.floor((i - 1) / 2);
            const parentValue = heap[parentIndex];
            if(value <= parentValue) {
                break;
            }
            heap[i] = parentValue;
            heap[parentIndex] = value;
            i = parentIndex;
        }
        
        perf.end('max-heap-enqueue', heap);
        perf.print('max-heap-enqueue');
    }

    dequeue() {
        perf.start('max-heap-dequeue', this.values);

        const heap = this.heap;
        const value = heap[0];
        
        heap[0] = heap[heap.length - 1];
        heap.pop();

        const {length} = heap;
        let parentIndex = 0;
        let leftIndex = 2 * parentIndex + 1;
        let rightIndex = leftIndex + 1;
            
        while(leftIndex < length) {
            let maxIndex = (rightIndex < length && heap[leftIndex] < heap[rightIndex]) ? rightIndex : leftIndex;
            const temp = heap[maxIndex];
            heap[maxIndex] = heap[parentIndex];
            heap[parentIndex] = temp;
            parentIndex = maxIndex;
            leftIndex = 2 * parentIndex + 1;
        }
        
        
        perf.end('max-heap-dequeue',  `${value} : ${heap}`);
        perf.print('max-heap-dequeue');

        return value;
    }
}

module.exports = MinHeap;