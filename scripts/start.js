async function start () {
    let type = process.argv[2];

    type = await processType(type);
    
    runStart(type);
}

async function processType (type) {
    const types = await readAlgorithmsTypes();
    if(type && types.includes(type)){
        await writeTempType(type);
    } else if (type) { 
        console.error('！错误：algorithms 文件夹下没有相应算法！');
        type = selectTypes(types)
    } else {
        try{
            type = await readTempType();
        }catch(e){
            type = selectTypes(types);
        }
        return type;
    }
    return type;
}

async function selectTypes(types) {
    const type = await readTypeOfTypes(types);
    writeTempType(type);
    return type;
}

async function readTypeOfTypes(types) {
    const util = require('util');
    const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});
    const question = util.promisify(readline.question).bind(readline);
    
    let answer = await question(`请选择要执行的算法：\n${types.map((val, ind)=>`${ind+1}. ${val}`).join('\n')}\n(目前只有 linear-list 模块可用)\n请输入以上算法名之一: `);
    while(!types.includes(answer)) {
        answer = await question(`输入错误，请重新输入（例：${types[0]}): `);
    }
    
    readline.close();
    return answer;
}

async function readAlgorithmsTypes() {
    const {readdir} = require('fs/promises');
    return readdir('algorithms');
}

async function writeTempType(type) {
    const {writeFile, mkdir, access} = require('fs/promises');
    const {Buffer} = require('buffer');
    const data = new Uint8Array(Buffer.from(type))
    try {
        await access("temp");
    } catch(e) {
        await mkdir('temp');
    } finally {
        await writeFile('./temp/.type.temp', data); 
    }      
   
}

async function readTempType(){
    const {readFile} = require('fs/promises');
    try{ 
        const content = await readFile('./temp/.type.temp');
        return content.toString();
    } catch(e) {
        throw 'NoSuchFile';
    }
}

async function runStart(type) {
    if(!type) return;
    const util = require('util');
    const exec = util.promisify(require('child_process').exec);
    const {stdout} = await exec(`cd ./algorithms/${type} && pnpm start`);
    console.log(stdout);
}

start();