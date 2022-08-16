const LinkList = require('./LinkList');

function run(values = [234, 23, 23 ,1, 5, 6, 129]) {
    const list = new LinkList(values);
    list.insert('double-pointer', 3, 12);
    list.insert('double-pointer', 7, 15);
    return true;
}

module.exports = run;