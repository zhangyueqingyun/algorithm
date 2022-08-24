function run() {
    const runBinarySearchTreeTest = require('./binary-search-tree');
    runBinarySearchTreeTest();

    const runRedBlackTreeTest = require('./red-black-tree');
    runRedBlackTreeTest();

    return true;
}

module.exports = run;