const SequenceList = require('./SequenceList');
const Queue = require('./Queue')
const Stack = require('./Stack')
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

    runQueueTest(values);
    runStackTest(values);

    return true;
}

function runQueueTest(values) {
    const queue = new Queue(values);
    console.log(`[ queue ] test:\n--------\n初始\t| ${queue.values}`);
    console.log(`入队\t| ${queue.enqueue(555)}`);
    console.log(`出队\t| ${queue.dequeue()}\n--------`);

}

function runStackTest(values) {
    const stack = new Stack(values);
    console.log(`[ stack ] test:\n--------\n初始\t| ${stack.values}`);
    const stackValues = stack.push(555);
    console.log(`入栈\t| ${stackValues}`);
    console.log(`出栈\t| ${new Stack(stackValues).pop()}\n--------`);
}

module.exports = run;