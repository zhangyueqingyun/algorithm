const SequenceList = require('../algorithm');

function quickSort(values) {
    const list = new SequenceList(values);
    list.sort("quick");
}

module.exports = quickSort;