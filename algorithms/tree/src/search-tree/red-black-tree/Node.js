const RED = Symbol('red');
const BLACK = Symbol('black');

class Node {
    static BLACK = BLACK;
    static RED = RED;
    constructor(value, parent) {
        this.value = value;
        this.color = 'red';
        this.left = null;
        this.right = null;
        this.parent = parent;
    }
}

module.exports = Node;