const LinkList = require('./LinkList');
const setCycle = require('./base/setCycle');

function run(values = [234, 23, 23 ,1, 5, 6, 129, 234, 43]) {
    runSingleLinkList(values);
    runTestLinkListInteraction();
    runQueueTest(values);
    runStackTest(values);
    return true;

};

function runTestLinkListInteraction() {
    /** 随便写的测试，有时间优化 */
    const detectIntersection = require('./detect-intersection/index').performance
    const list1 = new LinkList([33, 23, 1, 39]);
    const list2 = new LinkList([23, 1, 5, 23, 22]);
    setCycle(list1, 2);
    setCycle(list2, 3);
    let node1 = list1.head;
    node1 = node1.next.next.next;
    let node2 = list2.head;
    node2 = node2.next.next;
    node2.next = node1;
    detectIntersection(list1, list2)
    return true;
}

function runSingleLinkList(values) {
    const list = new LinkList(values);
    // list.insert('double-pointer', 3, 12);
    // list.insert('double-pointer', 7, 15);
    // list.insert('single-pointer', 3, 12);
    // list.insert('single-pointer', 7, 15);
    // list.insert('single-pointer', 0, 22);

    // list.delete('double-pointer', 2);
    // list.delete('double-pointer', 0);
    // list.delete('double-pointer', 6);
    
    // list.delete('single-pointer', 2);
    // list.delete('single-pointer', 0);
    // // list.delete('single-pointer', 6);
    // list.detectCycle('exhaustion', 3);
    // list.detectCycle('exhaustion', 5);
    // list.detectCycle('exhaustion', -1);
    
    // list.detectCycle('fast-slow-pointer', 3);
    // list.detectCycle('fast-slow-pointer', 5);
    // list.detectCycle('fast-slow-pointer', -1);
     
    // list.detectCycle('hash', 3);
    // list.detectCycle('hash', 5);
    // list.detectCycle('hash', -1);
    // list.exchange('double-pointer', 3, 6);
    // list.exchange('double-pointer', 0, 2);
    list.sort('bubble');
    list.sort('bucket');
    list.sort('count');
    list.sort('insertion');
    list.sort('merge');
    list.sort('quick');
    return true; 
};

function runQueueTest(values) {
    const Queue = require('./Queue');
    const queue = new Queue(values);
    console.log(`[ queue ] test:\n--------\n初始\t| ${queue}`)
    queue.enqueue(132);
    console.log(`入队\t| ${queue}`);
    console.log(`出队\t| ${queue.dequeue().value}\n--------`)
}

function runStackTest(values) {
    const Stack = require('./Stack');
    const stack = new Stack(values);
    console.log(`[ stack ] test:\n--------\n初始\t| ${stack}`)
    stack.push(132);
    console.log(`入栈\t| ${stack}`);
    console.log(`出栈\t| ${stack.pop().value}\n--------`)
}

module.exports = run;