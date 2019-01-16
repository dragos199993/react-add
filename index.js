#!/usr/bin/env node
const inquierer = require('inquirer');
const program = require('commander');
const { outputFile } = require('fs-extra');
const { insertIntoFile,
    checkCapitalizedLetter,
    onRootOfProject } = require('./data/utils');
const { showSuccess, showInfo } = require('./data/utils/messages');
const { defaultComponent, withRedux } = require('./factory/class/default');
const { defaultFunctionComponent } = require('./factory/function/default');
const { config } = require('./config');
const { rccQuestions, rfcQuestions } = require('./data/questions');
program
    .version(config.version)

program.on('--help', () => {
    showInfo("react-add rcc -> Creates a React class component");
    showInfo("react-add rfc -> Creates a React function component");
});

program.parse(process.argv);

const [, , ...args] = process.argv;


// Check if user is on root path of the project
if (!onRootOfProject()) return null;

if (args[0] === 'rcc')
    inquierer
        .prompt(rccQuestions)
        .then(answers => {
            let name = checkCapitalizedLetter(answers.rcc);
            let path = `./src/components/${name}/${name}.jsx`;


            outputFile(path, defaultComponent(name))

            if (answers.redux) {

                setTimeout(() => {
                    outputFile(path, insertIntoFile(path, 2, `export default connect()(${name})`, true))
                }, 50);

                setTimeout(() => {
                    outputFile(path, insertIntoFile(path, 1, `import { connect } from 'react-redux'`));
                }, 75);

            }

            if (answers.style !== 'NONE') {

                setTimeout(() => {
                    outputFile(
                        path,
                        insertIntoFile(path, 1, `import './${name}.${answers.style}'`)
                    );
                }, 100);
                outputFile(`./src/components/${name}/${name}.${answers.style}`, '');
            }
            showSuccess(`Done! Class component ${name} component added.`)
        });


if (args[0] === 'rfc') {
    inquierer
        .prompt(rfcQuestions)
        .then(answers => {
            outputFile(`./src/components/${answers.rfc}.jsx`, defaultFunctionComponent(answers.rfc))
            showSuccess(`Done! ${answers.rfc} component added.`)
        });
}

else if (args.length == 3) {
    if (args[0] === 'rcc' && args[1] === '--redux') {
        outputFile(`./src/components/${args[2]}.jsx`, withRedux(args[2]))
        showSuccess(`Done! ${args[2]} component added.`)
    }
}


if (!args[0]) {
    showInfo(`You cannot execute a command without any arguments. Please use --help for more informations.`);
}