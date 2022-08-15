const {
    testInsertionSort,
    testBubbleSort,
    testMergeSort,
    testQuickSort
} = require('./test');

function run(values = [23 ,34 ,1 ,5 ,29 ,300 ,234 ,43243 ,12341 ,12 ,222 ,1]) {
    testInsertionSort(values);
    testBubbleSort(values);
    testMergeSort(values);
    testQuickSort(values);
}

module.exports = {
    run
};