const {BaseList} = require("@z-algorithm/core")

class Stack extends BaseList{
    constructor(values = []){
        super(values)
    }

    push(value){
        const values = this.values;
        values.push(value);
        return values;
    }

    pop(value) {
        const values = this.values;
        return values.pop()
    }
}

module.exports = Stack;