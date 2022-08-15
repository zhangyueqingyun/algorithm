function insertionSort(values) {
    for(let i = 1; i< values.length; i++) {
        let val = values[i];
        let j;
        for(j = i - 1; j >= 0 && val < values[j]; j--) {
            values[j+1] = values[j];
        }
        values[j + 1] = val;
    }

    return values
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("insertion-sort", insertionSort);