function mergeSort(values) {
    if(values.length === 1) {
        return values;
    }
    
    const index = values.length / 2;
    const sortedArrA = mergeSort(values.slice(0, index));
    const sortedArrB = mergeSort(values.slice(index));

    return merge(sortedArrA, sortedArrB);
}

function merge(arrA, arrB) {
    const arr = [];

    let indexA = 0,
        indexB = 0;

    while(indexA < arrA.length && indexB < arrB.length) {
        if(arrA[indexA] < arrB[indexB]) {
            arr.push(arrA[indexA]);
            indexA++;
        } else {
            arr.push(arrB[indexB]);
            indexB++;
        }
    }
    return arr
            .concat(arrA.slice(indexA))
            .concat(arrB.slice(indexB));
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("merge-sort", mergeSort);