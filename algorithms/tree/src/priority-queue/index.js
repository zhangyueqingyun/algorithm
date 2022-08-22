function run() {
    const runHeapTest = require('./heap');
    runHeapTest();

    const runBinomialHeapTest = require('./binomial-heap');
    runBinomialHeapTest();
    
    const runFibonacciHeapTest = require('./fibonacci-heap');
    runFibonacciHeapTest();

    return true;
}

module.exports = run;