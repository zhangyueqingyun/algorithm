const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();

function performance(name, func) {
    return function (values) {
        perf.start(name, values);

        values = func(values);
        
        perf.end(name, values);
        perf.print(name);
        return values;   
    }
}

module.exports = performance;