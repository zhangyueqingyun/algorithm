const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();
const BaseBinaryTree = require('../base/BaseBinaryTree');

class CompleteBinaryTree extends BaseBinaryTree{
    traverse(name) {
        const traverse = require(`./traverse/${name}`);
        const perfName = `complete-${name}-traverse`;
        perf.start(perfName, this.values);
        const result = traverse(this.values);
        perf.end(perfName, result);
        perf.print(perfName);
    }
}

module.exports = CompleteBinaryTree;