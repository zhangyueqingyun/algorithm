const {
    testInsertionSort,
    testBubbleSort,
    testMergeSort,
    testQuickSort,
    testCountSort
} = require('./test');

function run(values = [23 ,34 ,1 ,5 ,29 ,300 ,234 ,43243 ,12341 ,12 ,222 ,1]) {
    testInsertionSort(values);
    testBubbleSort(values);
    testMergeSort(values);
    testQuickSort(values);
    testCountSort(values);
}

module.exports = {
    run
};