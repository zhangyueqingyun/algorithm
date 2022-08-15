class BaseList {
    constructor(values = []){
        this.originValues = values;
    }
    
    get values() {
        return [...this.originValues];
    }

    set values(values) {
        this.originValues = values;
    }
}

module.exports = BaseList;