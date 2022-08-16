async function select(quest, selection) {
    const inquirer = require('inquirer');
    const {value} = await inquirer.prompt([{
        type: 'list',
        name: 'value',
        message: quest,
        choices: selection,
    }])
    return value;
}

module.exports = select;