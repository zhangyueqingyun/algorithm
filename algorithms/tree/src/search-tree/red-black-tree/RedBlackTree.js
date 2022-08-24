const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();

const del = require('./delete');

class RedBlackTree {
    constructor(values) {
        this.values = values;
        for(let value of values) {
            this.insert(value);
        }
    }

    insert(value) {
        const insert = require('./insert');
        this.root = insert(this.root, value) || this.root;
    }

    find(type, value) {
        const perfName = `red-black-tree-${type}-find`;
        perf.start(perfName, `${this.values} : find(${value})`);
        
        const find = require(`./find/${type}`);
        const result = find(this.root, value);
        
        perf.end(perfName, !!result);
        perf.print(perfName);
    }

    delete(value) {
        const node = recursiveFind(value);
    }
}

module.exports = RedBlackTree;