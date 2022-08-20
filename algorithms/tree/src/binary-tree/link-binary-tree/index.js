function testBinaryTree() {
    const BinaryTree = require('./BinaryTree');
    const binaryTree = new BinaryTree([12, 34, 465, 656, 23]);
    binaryTree.traverse('pre-order');
    binaryTree.traverse('in-order');
    binaryTree.traverse('post-order');

    return true;
}

module.exports = testBinaryTree;