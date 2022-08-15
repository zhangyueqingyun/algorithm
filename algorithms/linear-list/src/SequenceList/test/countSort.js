const SequenceList = require('../algorithm');

function countSort(values) {
    const list = new SequenceList(values);
    list.sort("count");
}

module.exports = countSort;