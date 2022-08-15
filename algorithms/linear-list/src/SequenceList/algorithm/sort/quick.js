function quickSort(values) {
    return values;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("quick-sort", quickSort);
