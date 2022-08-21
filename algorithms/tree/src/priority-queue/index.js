function run() {
    const runHeapTest = require('./heap');
    runHeapTest();

    const runBinomialHeapTest = require('./binomial-heap');
    runBinomialHeapTest();
    return true;
}

module.exports = run;