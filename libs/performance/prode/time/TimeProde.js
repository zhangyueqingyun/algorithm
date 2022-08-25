const { v4: uuidv4 } = require('uuid');

const RUNNING = Symbol('running');
const WAITING = Symbol('waiting');
const FINISHED = Symbol('finished');

class TimeProde {
    constructor(id) {
        this.#id = id;
        this.#uuid = uuidv4();
        this.#status = WAITING;
    }

    get value() {
        return this.#measure.duration;
    }

    get info() {
        return {
            id: this.#id,
            startTime: this.#start.startTime,
            endTime: this.#end.startTime,
            duration: this.#measure.duration
        };
    }

    run() {
        if(this.#status === FINISHED) return;
        this.#status = RUNNING;
        this.#start = performance.mark(this.#startName);
    }

    stop() {
        if(this.#status === FINISHED) return;
        this.#end = performance.mark(this.#endName);
        this.#mersure =  performance.measure(this.#measureName, this.#startName, this.#endName);
        this.#status = FINISHED;
    }

    get #startName () {
        return `${this.#uuid}-start`;
    }

    get #endName () {
        return `${this.#uuid}-end`;
    }

    get #measureName() {
        return `${this.#uuid}-measure`
    }
}

module.exports = TimeProde;