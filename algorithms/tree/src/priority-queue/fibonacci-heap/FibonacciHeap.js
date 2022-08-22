const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();

const Node = require('./Node');
const merge = require('./merge');

class FibonacciHeap {
    constructor(values) {
        this.values = values;
        for(let value of values) {
            this.enqueue(value);
        }
    }
    enqueue(value) {
        const node = new Node(value);
        if(this.min) {
            node.right = this.min;
            node.left = this.min.left;
            this.min.left.right = node;
            this.min.left = node;
            this.min = value < this.min.value ? node : this.min;
        } else {
            this.min = node;
            node.left = node;
            node.right = node;
        }
    }

    dequeue() {
        const perfName = `fibonacci-heap-dequeue`;
        perf.start(perfName, this.values);
        if(!this.min) {
            return;
        }

        const node = this.min;
        let {left, right, firstChild} = node;
        let temp;
        if(right === node) {
            temp = firstChild;
        } else if(firstChild) {
            const lastChild = firstChild.left;
            left.right = firstChild;
            firstChild.left = left;
            right.left = lastChild;
            lastChild.right = right;
            temp = firstChild;
        } else {
            left.right = right;
            right.left = left;
            temp = right;
        }

        this.min = merge(temp);

        
        perf.end(perfName, node.value);
        perf.print(perfName);
        return node.value;
    }
}

module.exports = FibonacciHeap;