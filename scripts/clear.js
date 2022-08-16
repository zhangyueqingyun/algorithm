async function clear() {
    const {tempFile: {clear, read}} = require('@z-algorithm/utils');
    try {
        const algorithm = await read(__dirname);
        const clearSub = require(`../algorithms/${algorithm}/scripts/clear`);
        clearSub();
    } catch(e) {}
    clear(__dirname);
}

clear();