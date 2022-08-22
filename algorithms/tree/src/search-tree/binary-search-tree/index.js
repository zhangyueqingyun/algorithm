function run() {
    const BinarySearchTree = require('./BinarySearchTree');
    const binarySearchTree = new BinarySearchTree([2, 4, 5, 9, 10, -1, 222, 12,]);
    binarySearchTree.insert('loop', 3);
    binarySearchTree.insert('recursive', 24);
    binarySearchTree.insert('recursive', 35);
    binarySearchTree.find('loop', 5);
    binarySearchTree.find('recursive', 5);
    binarySearchTree.find('loop', 200);
    binarySearchTree.find('recursive', 200);
    
    binarySearchTree.delete('loop', 2);
    binarySearchTree.find('loop', 2);
    binarySearchTree.find('loop', 5);
    binarySearchTree.delete('loop', 5);
    binarySearchTree.find('loop', 5);
    
    binarySearchTree.delete('recursive', 2);
    binarySearchTree.find('recursive', 2);
    binarySearchTree.find('recursive', 5);
    binarySearchTree.delete('recursive', 5);
    binarySearchTree.find('recursive', 5);
}

module.exports = run;