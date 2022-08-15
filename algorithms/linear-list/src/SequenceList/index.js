const SequenceList = require('./SequenceList');

function run(values = [234, 23, 23 ,1, 5, 6, 129]) {
    const list = new SequenceList(values);
    list.sort("count");
    list.sort("insertion");
    list.sort("bubble");
    list.sort("merge");
    list.sort("quick");
    list.sort("bucket");
}

module.exports = run;