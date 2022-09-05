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
        const find = require(`./find/${type}`);
        
        const perfName = `red-black-tree-${type}-find`;
        perf.start(perfName, `${this.values} : find(${value})`);
    
        const result = find(this.root, value);
        
        perf.end(perfName, !!result);
        perf.print(perfName);
    }

    delete(value) {
        const recursiveFind = require('./find/recursive');
        const node = recursiveFind(value);
        const del = require('./delete');
        const perfName = `red-black-tree-delete`;
        perf.start(perfName, `${this.values} : find(${value})`);
        
        del(this, node);

        perf.end(perfName, '已删除');
        perf.print(perfName);
    }
}

module.exports = RedBlackTree;