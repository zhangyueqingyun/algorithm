const { v4: uuidv4 } = require('uuid');
        
class LinkNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
        this.uuid = uuidv4();
    }
    
    [Symbol.toPrimitive]() {
        return this.uuid;
    }
}

module.exports = LinkNode;