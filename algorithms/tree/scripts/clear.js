function clear() {
    const {resolve} = require('path');
    const {tempFile: {clear}} = require('@z-algorithm/utils');
    clear(__dirname);
    clear(resolve(__dirname, '../'));
}

module.exports = clear;