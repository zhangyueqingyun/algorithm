function radixSort(values) {
    let maxLen = findMaxCharCount(values);
    let index = 0;
    while(index <= maxLen) {
        const buckets = [[], [], [], [], [], [], [], [], [], []];
        for(let val of values) {
            const bucket = buckets[getBucketInd(val, index)];
            let i = bucket.length;
            while(i > 0 && bucket[i - 1] >= val) {
                bucket[i] = bucket[i - 1];
                i--;
            }
            bucket[i] = val;
        }
        values = buckets.reduce((last, current) => (last.concat(current)));
        index++;
    }
    return values;
}

function findMaxCharCount(values) {
    if(!values?.length) return;
    
    let max = values[0]; 
    for(let val of values) {
        if(max < val) max = val;
    }
    return max.toString().length;
}

function getBucketInd(val, index) {
    const strArr = val.toString().split('');
    return strArr[strArr.length - 1 - index] || 0;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("radix-sort", radixSort);