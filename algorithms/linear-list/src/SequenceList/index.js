const {
    testInsertionSort,
    testBubbleSort
} = require('./test')

function run(values = [23, 34, 1, 5, 29]) {
    testInsertionSort(values)
    testBubbleSort(values)
}

module.exports = {
    run
}