function run(values = [234 ,23 ,-1 ,23 ,1 ,5 ,6 ,129 ,666]) {
    const MinHeap = require('./MinHeap');
    const minHeap = new MinHeap(values);
    minHeap.enqueue(999);
    minHeap.enqueue(22);
    minHeap.enqueue(-1);
    minHeap.dequeue();

    const MaxHeap = require('./MaxHeap');
    const maxHeap = new MaxHeap(values);
    maxHeap.enqueue(999);
    maxHeap.enqueue(22);
    maxHeap.enqueue(-1);
    maxHeap.dequeue();
    return true;
}

module.exports = run;