function bubbleSort (values, perf) {
    perf.start("bubble-sort", values);

    for(let i = values.length-1; i > 0 ; i--) {
        for(let j = 0; j < i; j++){
            if(values[j] > values[j + 1]) {
                let temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;
            }
        }
    }

    perf.end("bubble-sort", values);
    perf.print("bubble-sort");
}

module.exports = bubbleSort;