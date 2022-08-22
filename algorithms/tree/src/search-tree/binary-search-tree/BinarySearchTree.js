const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();

class BinarySearchTree {
    constructor(values, type = 'recursive') {
        this.values = values;
        for(let value of values) {
            this.insert(type, value);
        }    
    }

    insert(type, value) {
        const insert = require(`./insert/${type}`);
        const node = insert(this.root, value);
        this.root ??= node;
    }

    find (type, value) {
        const perfName = `binary-search-tree-${type}-find`;
        perf.start(perfName, `${this.values} : find(${value})`);

        const find = require(`./find/${type}`);
        const result = find(this.root, value);
        
        perf.end(perfName, !!result);
        perf.print(perfName);
        
        return !!result;
    }

    delete (type, value) {
        const perfName = `binary-search-tree-${type}-del`;
        perf.start(perfName, `${this.values} : delete(${value})`);

        const del= require(`./delete/${type}`);
        const {root, success} = del(this.root, value);
        this.root = root;
        perf.end(perfName, success);
        perf.print(perfName);
        
        return !!success;
    }
}

module.exports = BinarySearchTree;