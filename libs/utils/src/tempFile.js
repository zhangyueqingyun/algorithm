async function writeTempFile(dir, content) {
    const writeFile = require('./writeFile');
    const {resolve} = require('path');
    await writeFile(resolve(dir, '.temp'), '.algorithm.temp', content);
}

async function readTempFile(dir) {
    const {readFile} = require('fs/promises');
    const {resolve} = require('path');
    const content = await readFile(resolve(dir, './.temp/.algorithm.temp'));
    return content.toString();
}

async function clearTempFile(dir) {
    const {rm} = require('fs/promises');
    const {resolve} = require('path');
    rm(resolve(dir, '.temp'), {
        force: true,
        recursive: true
    });
}

module.exports = {
    read: readTempFile,
    write: writeTempFile,
    clear: clearTempFile
};