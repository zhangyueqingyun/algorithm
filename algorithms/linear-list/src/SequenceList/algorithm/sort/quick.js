function quickSort (values) {
    if(values.length < 2) {
        return values;
    }
    
    const divideInd = Math.floor(values.length / 2);
    const divideVal = values[divideInd];
    
    let smallValues = [];
    let largeValues = [];
    let equalValues = [];
    
    for(let val of values) {
        if(val > divideVal) largeValues.push(val);
        else if(val === divideVal) equalValues.push(val);
        else smallValues.push(val);
    }   
    
    smallValues = quickSort(smallValues);
    largeValues = quickSort(largeValues);
    
    return smallValues.concat(equalValues).concat(largeValues);
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("quick-sort", quickSort);
