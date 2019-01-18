const { readFileSync, existsSync } = require('fs-extra');
const { showInfo, showDanger } = require('./utils/messages');

const insertIntoFile = (path, position, data, fromEnd = false) => {
    let result = readFileSync(path).toString().trim().split("\n");
    if (fromEnd) {
        result = result.slice(0, -position);
        result.push(data);
    } else {
        result.splice(position, 0, data)
    }
    let joined = result.join("\n");
    return joined;
}

const onRootOfProject = () => {
    if (!existsSync('./package.json') || !existsSync('./src')) {
        showDanger("You need to be on root of your React project");
        return false;
    } else return true
}

const checkCapitalizedLetter = name => {

    if (name[0] !== name[0].toUpperCase())
        showInfo(`Info: Components name must be capitalized. Now fixed!`)

    let cName = name.split("/").pop();
    cName = cName[0].toUpperCase() + cName.slice(1);
    return cName;
}

const componentAlreadyExists = (reactInfo, answers) => {
    reactInfo.components.map(component => {
        if (component.rcc === answers.rcc) {
            showDanger(`Component with name of '${answers.rcc}' already exists!`)
            process.exit(0);
        }
    })
}

const reactInfo = () => {
    try {
        const reactInfo = require('../reactAdd.json');
        return reactInfo;
    }
    catch (e) {
        return null;
    }
}

module.exports = {
    reactInfo,
    insertIntoFile,
    checkCapitalizedLetter,
    onRootOfProject,
    componentAlreadyExists
}