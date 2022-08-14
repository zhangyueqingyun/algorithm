const SequenceList = require('./SequenceList');

function run(values = [23, 34, 1, 5, 29]) {
    const sequenceList = new SequenceList(values);

    sequenceList.sort("insertion");
}

module.exports = {
    run
}