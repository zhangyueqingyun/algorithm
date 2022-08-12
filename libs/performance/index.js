class AlgorithmPerformance {
    constructor(name) {
        this.name = name;
        this.operations = {};
        this.currentOperation = '';
    }

    get fullName(){
        return `${this.name}-${this.currentOperation}`;
    }

    get startMarkName() {
        return `${this.fullName}-start`;
    }

    get endMarkName() {
        return `${this.fullName}-end`;
    }

    start(operation, values) {
        this.currentOperation = operation;
        this.operations[operation] = { name: this.fullName, oldValues: `${values}` };
        performance.mark(this.startMarkName);
    }

    end(operation, values) {
        this.currentOperation = operation;

        performance.mark(this.endMarkName);
        const {startTime: startTime} = performance.getEntriesByName(this.startMarkName)[0];
        const {startTime: endTime} = performance.getEntriesByName(this.endMarkName)[0];
        
        this.operations[operation] = {
            ...this.operations[operation],
            newValues: `${values}`,
            startTime,
            endTime,
        }
    }
    
    print(operation){
        printPerformance(this.operations[operation]);
    }
}

function printPerformance({name, oldValues, newValues, startTime, endTime}) {
    console.log(`\n[ ${name} ] performance:`);
    console.log('--------');
    console.log(`初始值\t|  ${oldValues}`);
    console.log(`结果值\t|  ${newValues}`)
    console.log(`时长\t|  ${endTime - startTime} ms`);
    console.log('--------\n');
}

module.exports = AlgorithmPerformance