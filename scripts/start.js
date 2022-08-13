
async function start () {
    let type = process.argv[2]
    type = await writeTypeToTempFile(type)
    runStart(type)
}

async function writeTypeToTempFile() {
    const {open} = require('fs/promises');
    let filehandle = await open('./algorithmns.temp', 'rw');
    try{ 

    } finally {
        await filehandle?.close();
    }
}

function runStart(type) {

}