async function processInput (algorithm, currrent_dir, algorithms_dir) {  
    const {readdir} = require('fs/promises');
    const algorithms = await readdir(algorithms_dir);

    if(!(algorithm && algorithms.includes(algorithm))) {
        try {
            if(algorithm) {   
                console.error('！错误：algorithms 文件夹下没有相应算法！');
                throw 'NoAlgorithm';
            } else {       
                const {read} = require('./tempFile');
                algorithm = await read(currrent_dir);
            }
        } catch(e) {
            const select = require('./select');
            algorithm = await select('请选择: ', algorithms); 
        }
    }

    const {write} = require('./tempFile');
    write(currrent_dir, algorithm);

    return algorithm;
}

module.exports = processInput;