const {BaseList} = require("@z-algorithm/core")

class Queue extends BaseList{
    constructor(values = []){
        super(values)
    }

    enqueue(value){
        const values = this.values;
        values.push(value);
        return values;
    }

    dequeue(value) {
        const values = this.values;
        return values.shift()
    }
}

module.exports = Queue;