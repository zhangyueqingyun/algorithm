function run() {
    const BinomialHeap = require('./BinomialHeap');
    const binomialHeap = new BinomialHeap([2, 3, 5, 9, 10, -1, 222, 12,]);
    binomialHeap.dequeue();
    
}

module.exports = run;