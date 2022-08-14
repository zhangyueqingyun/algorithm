const SequenceList = require('../list/SequenceList');

function insertionSort(values) {
    const list = new SequenceList(values);
    list.sort("insertion");
}

module.exports = insertionSort;