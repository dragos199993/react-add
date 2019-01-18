#!/usr/bin/env node
const program = require('commander');
const { onRootOfProject } = require('./data/utils');
const { showInfo } = require('./data/utils/messages');
const { config } = require('./config');
const generateRcc = require('./data/commands/components/rcc');
const generateRfc = require('./data/commands/components/rfc');
const { exists } = require('fs-extra');

const init = require('./data/commands/init');
const install = require('./data/commands/install');

program.version(config.version)
program.on('--help', () => {
    showInfo("react-add rcc -> Creates a React class component");
    showInfo("react-add rfc -> Creates a React function component");
    showInfo("react-add init -> Single time process. Creates a file where all components blueprint are stored. ");
});
program.parse(process.argv);

const [, , ...args] = process.argv;

// Check if user is on root path of the project
if (!onRootOfProject())
    return null;

exists('./reactadd.json', isInit => {

    if (isInit)
        switch (args[0]) {
            case 'rcc': generateRcc();
                break;
            case 'rfc': generateRfc();
                break;
            case 'init': showInfo(`React-add is already initialized. Use --help for more info.`);
                break;
            case 'install': install();
                break;
            default: showInfo(`Please use a valid command. Use --help for more info.`);
        }

    else
        switch (args[0]) {
            case 'init': init();
                break;
            case 'rcc' || 'rfc': showInfo(`You need to initialize react-add first. Use 'react-add init'.`);
                break;
            default: showInfo(`Please use a valid command. Use --help for more info.`);
        }

});



