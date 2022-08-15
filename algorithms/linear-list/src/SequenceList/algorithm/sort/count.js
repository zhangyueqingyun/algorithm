function countSort(values) {
    const result = [];
    
    for(let i = 0; i < values.length; i++) {
        let count = 0;
        for(let j = 0; j < values.length; j++) {
            if(values[j] < values[i] || values[j] == values[i] && i < j) 
                count++;
        }
        result[count] = values[i];
    }
    return result;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("count-sort", countSort);