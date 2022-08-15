function bucketSort(values) {
    const {max, min} = findMaxAndMin(values);
    const interval = (max - min) / 5;
    const buckets = [[], [], [], [], [], []];

    for(let val of values) {
        const bucket = buckets[Math.floor((val - min) / interval)];
        let i = bucket.length;
        while(i > 0 && bucket[i - 1] >= val) {
            bucket[i] = bucket[i - 1];
            i--;
        }
        bucket[i] = val;
    }

    return buckets.reduce(function(last, current) {
        return last.concat(current);
    })
}

function findMaxAndMin(values) {
    if(!values?.length) return;
    
    let max = values[0], 
        min = values[0];
    
        for(let val of values) {
        if(max < val) max = val;
        if(min > val) min = val;
    }

    return {max, min};
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("bucket-sort", bucketSort);