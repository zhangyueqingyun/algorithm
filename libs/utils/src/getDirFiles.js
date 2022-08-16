async function getDirFiles (path) {
    const { readdir } = require("fs/promises");
    const files = await readdir(path);
    return files;
}

module.exports = getDirFiles;