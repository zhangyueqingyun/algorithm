function run() {
    const RedBlackTree = require('./RedBlackTree');
    const redBlackTree = new RedBlackTree([2, 4, 5, 9, 10, -1, 222, 12]);

    redBlackTree.insert(17);
    redBlackTree.find('loop', 5);
    redBlackTree.find('loop', 10);
    redBlackTree.find('loop', -1);
    redBlackTree.find('loop', 12);
    redBlackTree.find('loop', 11);
    redBlackTree.find('loop', 222);

    redBlackTree.delete(-1);
    redBlackTree.find('loop', -1);

}

module.exports = run;