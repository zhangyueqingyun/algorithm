async function run (algorithm) {
    const {processInput} = require('@z-algorithm/utils');
    const {resolve} = require('path');
    algorithm = await processInput(algorithm, __dirname, resolve(__dirname, '../src'));

    if(!algorithm) return;
    
    const runAlgorithm = require(`../src/${algorithm}`);
    return runAlgorithm(process.argv[3]);
   }

module.exports = run;