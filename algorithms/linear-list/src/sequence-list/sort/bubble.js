function bubbleSort (values) {
    for(let i = values.length-1; i > 0 ; i--) {
        for(let j = 0; j < i; j++){
            if(values[j] > values[j + 1]) {
                let temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;
            }
        }
    }
    return values;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("bubble-sort", bubbleSort);
