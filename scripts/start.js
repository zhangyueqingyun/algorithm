async function start () {
    let algorithm = process.argv[2];

    const {processInput} = require('@z-algorithm/utils');
    const {resolve} = require('path');
    algorithm = await processInput(algorithm, __dirname, resolve(__dirname, '../algorithms'));

    if(!algorithm) return;
    
    const run = require(`../algorithms/${algorithm}/scripts/run`);
    const succuess = await run(process.argv[3]);
    if(!succuess) {
        console.log('\n警告: 该模块暂未开放, 以下为可用模块\nlinear-list -> sequence-list\nlinear-list -> link-list\n');
        require('./clear');
    }
}

start();