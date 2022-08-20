function testTheadedBinaryTree(values = [12, 34, 465, 656, 23]) {
    // const PreOrderThreadedBinaryTree = require('./PreOrderThreadedBinaryTree');
    // const preOrderThreadedBinaryTree = new PreOrderThreadedBinaryTree(values);
    // preOrderThreadedBinaryTree.traverse();
    const InOrderThreadedBinaryTree = require('./InOrderThreadedBinaryTree');
    const inOrderThreadedBinaryTree = new InOrderThreadedBinaryTree(values);
    inOrderThreadedBinaryTree.traverse();
    // const PostOrderThreadedBinaryTree = require('./PostOrderThreadedBinaryTree');
    // const postOrderThreadedBinaryTree = new PostOrderThreadedBinaryTree(values);
    // postOrderThreadedBinaryTree.traverse();

    return true;
}

module.exports = testTheadedBinaryTree;