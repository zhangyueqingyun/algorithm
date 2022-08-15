function selectionSort(values) {
    for(let i = 0; i < values.length; i++) {
        let minInd = i;
        for(let j = i + 1; j < values.length; j++) {
            if(values[j] < values[minInd]) {
                minInd = j;
            }
        }
        if(minInd !== i) {
            const temp = values[minInd];
            values[minInd] = values[i];
            values[i] = temp;
        }
    }
    return values;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("selection-sort", selectionSort);