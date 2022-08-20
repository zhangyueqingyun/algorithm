function testCompoleteBinaryTree(values = [12, 34, 465, 656, 23]) {
    const CompleteBinaryTree = require('./CompleteBinaryTree');
    const binaryTree = new CompleteBinaryTree(values);
    binaryTree.traverse('pre-order');
    binaryTree.traverse('in-order');
    binaryTree.traverse('post-order');

    return true;
}

module.exports = testCompoleteBinaryTree;