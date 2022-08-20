class BaseBinaryTree {
    constructor(values) {
        this.originalValues = values;
    }

    get values () {
        return [...this.originalValues];
    }

    [Symbol.toPrimitive]() {
        return this.values;
    }
}

module.exports = BaseBinaryTree;