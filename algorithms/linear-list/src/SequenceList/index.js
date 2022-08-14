const {
    testInsertionSort
} = require('./test')

function run(values = [23, 34, 1, 5, 29]) {
    testInsertionSort(values)
}

module.exports = {
    run
}