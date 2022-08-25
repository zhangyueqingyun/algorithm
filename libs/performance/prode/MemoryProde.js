const { totalmem, freemem } = require('os');
const { v4: uuidv4 } = require('uuid');
const { setInterval } = require('timers/promises');

const RUNNING = Symbol('running');
const WAITING = Symbol('waiting');
const FINISHED = Symbol('finished');

class MemoryProde {
    constructor(id) {
        this.#id = id;
        this.#uuid = uuidv4();
        this.#measures = [];
        this.#status = WAITING;
    }

    get value() {
        return Math.max(...this.#measures.map(
            measure => (measure.totalmem - measure.freemem)
        ));
    }

    run() {
        if(this.#status === FINISHED) return;
        this.#status = RUNNING;
        for await(let memory of setInterval(1, {
            startTime: performance.now(),
            totalmem: totalmem(),
            freemem: freemem()
        })) {    
            if(this.#finished) {
                break;
            }
            this.#measures.push(memory);
        }
    }

    stop() {
        this.#status = FINISHED;
    }
}

module.exports = TimeProde;