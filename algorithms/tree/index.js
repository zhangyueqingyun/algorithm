async function runStart (algorithm) {
    const {processInput} = require('@z-algorithm/utils');
    const {resolve} = require('path');
    algorithm = await processInput(algorithm, __dirname, resolve(__dirname, './src'));
    if(!algorithm) return;
    
    const run = require(`./src/${algorithm}`);
    let success = await run(process.argv[3]);

    if(!success) {
        console.log('该模块暂未启用');
    }
}

runStart();