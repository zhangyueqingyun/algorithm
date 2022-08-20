function run() {
    console.log('\n---------- test-binary-tree ----------\n')
    const binaryTreeTest = require('./link-binary-tree');
    binaryTreeTest();

    console.log('\n---------- test-compelete-binary-tree ----------\n')
    const completeBinaryTreeTest = require('./complete-binary-tree');
    completeBinaryTreeTest();

    console.log('\n---------- test-threaded-binary-tree ----------\n')
    const threadedBinaryTreeTest = require('./threaded-binary-tree');
    threadedBinaryTreeTest();
    return true;
}

module.exports = run;