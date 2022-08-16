async function writeFile(dir, filename, content) {
    const {writeFile, mkdir, access} = require('fs/promises');
    const {Buffer} = require('buffer');
    const data = new Uint8Array(Buffer.from(content))
    try {
        await access(dir);
    } catch(e) {
        await mkdir(dir, {recursive: true});
    } finally {
        const {resolve} = require('path');
        await writeFile(resolve(dir, filename), data); 
    }        
}

module.exports = writeFile;