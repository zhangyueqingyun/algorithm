const {TimeProde, MemoryProde} = require('../prode');

function measure(func, time = true, memory = true) {
    const data = {};
    time && (data.time = measureWithProde(func, TimeProde));
    memory && (data.memory = measureWithProde(func, MemoryProde));
    return data;
}

function measureWithProde(func, ProdeClass) {
    const prode = new ProdeClass();
    prode.run();
    func();
    prode.stop();
    return prode.value;
}

module.exports = measure;