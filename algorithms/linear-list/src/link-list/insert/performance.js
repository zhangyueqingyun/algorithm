const {performance} = require('@z-algorithm/core');

function desc(ind, val) {
    return `insert(index = ${ind} , value = ${val})`
}

function performanceWrapper(name, func) {
    return performance(name, func, desc)
}

module.exports = performanceWrapper;