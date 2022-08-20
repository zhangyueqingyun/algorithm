class Node {
    constructor(value) {
        this.value = value;
        this.flag = 0b00;
    }

    set left(node) {
        this.flag &= 0b01;
        this._left = node;
    }

    get left() {
        if(!(this.flag & 0b10)) {
            return this._left;
        }
    }
    
    set right(node) {
        this.flag &= 0b10;
        this._right = node;
    }

    get right() {
        if(!(this.flag & 0b01)) {
            return this._right;
        }
    }  

    set prev(node) {
        this.flag |= 0b10;
        this._left = node;
    }

    get prev() {
        if(this.flag & 0b10) {
            return this._left;
        }
    }

    set next(node) {
        this.flag |= 0b01;
        this._right = node;
    }

    get next() {
        if(this.flag & 0b01) {
            return this._right;
        }
    }
}

module.exports = Node;