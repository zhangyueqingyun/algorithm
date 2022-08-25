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
        
        const {startTime: startTime} = performance.getEntriesByName(this.startMarkName).pop();
        const {startTime: endTime} = performance.getEntriesByName(this.endMarkName).pop();
        
        this.operations[operation] = {
            ...this.operations[operation],
            newValues: `${values}`,
            startTime,
            endTime,
        }
    }
    
    print(operation, description){
        printPerformance(this.operations[operation], description);
    }
}

function printPerformance({name, oldValues, newValues, startTime, endTime}, description) {
    console.log(`[ ${name} ] performance:`);
    (description) && (console.log(`[ desc: ${description} ]`));
    console.log('--------');
    console.log(`初始值\t|  ${oldValues}`);
    console.log(`结果值\t|  ${newValues}`)
    console.log(`时长\t|  ${endTime - startTime} ms`);
    console.log('--------');
}

module.exports = AlgorithmPerformance