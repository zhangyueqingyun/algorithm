const SequenceList = require('../algorithm');

function mergeSort(values) {
    const list = new SequenceList(values);
    list.sort("merge");
}

module.exports = mergeSort;