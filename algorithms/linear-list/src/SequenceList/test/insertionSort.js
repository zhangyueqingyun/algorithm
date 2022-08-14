const SequenceList = require('../algorithm');

function insertionSort(values) {
    const list = new SequenceList(values);
    list.sort("insertion");
}

module.exports = insertionSort;