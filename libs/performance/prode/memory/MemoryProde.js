const { totalmem, freemem } = require('os');
const { v4: uuidv4 } = require('uuid');
const { setInterval } = require('timers/promises');

class MemoryProde {
    constructor(id) {
        this.id = id;
        this.#uuid = uuidv4();
        this.#measures = [];
        this.#finished = false;
    }

    get value() {
        return Math.max(...this.#measures.map(
            measure => (measure.totalmem - measure.freemem)
        ));
    }

    run() {
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
        this.#finished = true;
    }
}

module.exports = TimeProde;