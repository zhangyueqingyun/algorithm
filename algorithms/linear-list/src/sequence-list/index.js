const SequenceList = require('./SequenceList');
const Queue = require('./Queue')
function run(values = [234, 23, 23 ,1, 5, 6, 129]) {
    const list = new SequenceList(values);
    list.sort("count");
    list.sort("insertion");
    list.sort("bubble");
    list.sort("merge");
    list.sort("quick");
    list.sort("bucket");
    list.sort("radix");
    list.sort("selection");

    const queue = new Queue(values);
    console.log(`[ queue ] test:\n--------\n初始\t| ${queue.values}`);
    console.log(`入队\t| ${queue.enqueue(555)}`);
    console.log(`出队\t| ${queue.dequeue()}\n--------`);
    return true;
}

module.exports = run;