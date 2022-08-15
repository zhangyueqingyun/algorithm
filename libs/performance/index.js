class AlgorithmPerformance {
    constructor() {
        this.operations = {};
        this.name = '';
    }

    get startMarkName() {
        return `${this.name}-start`;
    }

    get endMarkName() {
        return `${this.name}-end`;
    }

    start(operation, values) {
        this.name = operation;
        this.operations[operation] = { name: this.name, oldValues: `${values}` };
        performance.mark(this.startMarkName);
    }

    end(operation, values) {
        this.name = operation;

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
    console.log(`[ ${name} ] performance:`);
    console.log('--------');
    console.log(`初始值\t|  ${oldValues}`);
    console.log(`结果值\t|  ${newValues}`)
    console.log(`时长\t|  ${endTime - startTime} ms`);
    console.log('--------');
}

module.exports = AlgorithmPerformance