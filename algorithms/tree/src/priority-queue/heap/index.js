function run(values = [234 ,23 ,-1 ,23 ,1 ,5 ,6 ,129 ,666]) {
    const MinHeap = require('./MinHeap');
    const minHeap = new MinHeap(values);
    minHeap.enqueue(999);
    minHeap.enqueue(22);
    minHeap.enqueue(-1);
    minHeap.dequeue();
    return true;
}

module.exports = run;