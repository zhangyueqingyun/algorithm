const AlgorithmPerformance = require('@z-algorithm/performance');
const perf = new AlgorithmPerformance();

function performance(name, func, description) {
    return function (values, ...rest) {
        perf.start(name, values);

        values = func(values, ...rest);
        
        perf.end(name, values);
        perf.print(name, description?.(...rest));
        return values;   
    }
}

module.exports = performance;