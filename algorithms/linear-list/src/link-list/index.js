const LinkList = require('./LinkList');

function run(values = [234, 23, 23 ,1, 5, 6, 129]) {
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
    // list.delete('single-pointer', 6);
    list.detectCycle('exhaustion', 3);
    list.detectCycle('exhaustion', 5);
    list.detectCycle('exhaustion', -1);
    
    list.detectCycle('fast-slow-pointer', 3);
    list.detectCycle('fast-slow-pointer', 5);
    list.detectCycle('fast-slow-pointer', -1);
     
    list.detectCycle('hash', 3);
    list.detectCycle('hash', 5);
    list.detectCycle('hash', -1);
    return true;
}

module.exports = run;