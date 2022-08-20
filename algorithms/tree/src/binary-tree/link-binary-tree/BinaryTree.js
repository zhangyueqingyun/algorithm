const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();
const BaseBinaryTree = require('../base/BaseBinaryTree');

class BinaryTree extends BaseBinaryTree{
    get root() {
        return initBinaryTree(this.values);
    }

    traverse(name) {
        const traverse = require(`./traverse/${name}`);
        const perfName = `${name}-traverse`;
        perf.start(perfName, this.values);
        const result = traverse(this.root);
        perf.end(perfName, result);
        perf.print(perfName);
    }
}

const Node = require('./Node');
function initBinaryTree (values) {
    let queue = [];
    for(let value of values) {
        queue.push(new Node(value));
    }
    const root = queue[0];
    let i = 0;
    while(i < values.length) {
        const node = queue[i]
        node.left = queue[2 * i + 1];
        node.right = queue[2 * i + 2];
        i++;
    }
    return root;
}

module.exports = BinaryTree;