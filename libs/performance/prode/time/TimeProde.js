const { v4: uuidv4 } = require('uuid');

class TimeProde {
    constructor(id) {
        this.id = id;
        this.#uuid = uuidv4();
    }

    get value() {
        return {
            startTime: this.#start.startTime,
            endTime: this.#end.startTime,
            duration: this.#measure.duration
        };
    }

    get startName () {
        return `${this.#uuid}-start`;
    }

    get endName () {
        return `${this.#uuid}-end`;
    }

    get measureName() {
        return `${this.#uuid}-measure`
    }

    run() {
        this.#start = performance.mark(this.startName);
    }

    stop() {
        this.#end = performance.mark(this.endName);
        this.#mersure =  performance.measure(this.measureName, this.startName, this.endName);
    }
}

module.exports = TimeProde;