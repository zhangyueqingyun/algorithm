function clear() {
    const {rm} = require('fs/promises');
    rm('temp', {
        force: true,
        recursive: true
    });
}

clear();