function run() {
    console.log('\n---------- test-binary-tree ----------\n')
    const binaryTreeTest = require('./link-binary-tree');
    binaryTreeTest();

    console.log('\n---------- test-compelete-binary-tree ----------\n')
    const completeBinaryTreeTest = require('./complete-binary-tree');
    completeBinaryTreeTest();
    return true;
}

module.exports = run;