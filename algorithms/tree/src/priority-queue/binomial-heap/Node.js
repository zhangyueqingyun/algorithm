class Node {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.firstChild = null;
        this.sibling = null;
    }
}

module.exports = Node;