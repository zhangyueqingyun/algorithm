const { v4: uuidv4 } = require('uuid');
        
class Node {
    constructor(value) {
        this.value = value;
        this.degree = 0;
        this.left = null;
        this.right = null;
        this.firstChild = null; 
        this.uuid = uuidv4();
    }
        
    [Symbol.toPrimitive]() {
        return this.uuid;
    }
 }

 module.exports = Node;