const AlgorithmPerformance = require('@z-algorithm/performance');

class BaseList {
    constructor(values = []){
        this.originValues = values;
        this.perf = new AlgorithmPerformance('sequence-list');
    }
    
    get values() {
        return [...this.originValues];
    }

    set values(values) {
        this.originValues = values;
    }
}

module.exports = BaseList;