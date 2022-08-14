module.exports = function insertionSort(values, perf) {
    perf.start("insertion-sort", values)
    
    for(let i = 1; i< values.length; i++) {
        let val = values[i];
        let j;
        for(j = i - 1; j >= 0 && val < values[j]; j--) {
            values[j+1] = values[j];
        }
        values[j + 1] = val;
    }

    perf.end("insertion-sort", values)
    perf.print("insertion-sort")

    return values
}