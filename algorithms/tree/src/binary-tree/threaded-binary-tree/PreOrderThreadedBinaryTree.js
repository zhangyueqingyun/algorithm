const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();
const BaseBinaryTree = require('../base/BaseBinaryTree');
const Node = require('./Node');

class InOrderThreadedBinaryTree extends BaseBinaryTree {
    get root() {
        const values = this.values;
        const nodes = values.map(value => new Node(value));

        let root = nodes[0];
        for(let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                const leftIndex = 2 * i + 1;
                const rightIndex = 2 * i + 2;
                (leftIndex < values.length) && (node.left = nodes[leftIndex]);
                (rightIndex < values.length) && (node.right = nodes[rightIndex]);
        }

        let prevNode;
        let needSetNext = false;
        function process(node) {
            needSetNext && (prevNode.next = node);
            needSetNext = !node?.right;
            (!node?.left) && (node.prev = prevNode);
            prevNode = node;
        }
        function traverse(node) {
            // console.log(node.value, node?.next?.value);
            (node?.left) && traverse(node.left);     
            process(node);
            (node?.right) && traverse(node.right);
        }
        traverse(root);
        prevNode = null;
        return root;
    }

    traverse () {
        // perf.start('traverse-prev-order-threaded-binary-tree', this.values);

        // const root = this.root, list = [];
        // let next = root;
        // while(next?.left) {
        //     next = next.left;
        // }

        
        
        // perf.end('traverse-prev-order-threaded-binary-tree', list);
        // perf.print('traverse-prev-order-threaded-binary-tree');
        // return list;
    }
}

module.exports = InOrderThreadedBinaryTree;