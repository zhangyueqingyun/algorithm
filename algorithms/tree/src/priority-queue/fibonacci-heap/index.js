function run() {
    const FibonacciHeap = require('./FibonacciHeap');
    const fibonacciHeap = new FibonacciHeap([2, 3, 5, 9, 10, -1, 222, 12]);    
    fibonacciHeap.dequeue();
}

module.exports = run;