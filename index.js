#!/usr/bin/env node
const program = require('commander');
const { onRootOfProject } = require('./data/utils');
const { showInfo } = require('./data/utils/messages');
const { config } = require('./config');
const generateRcc = require('./rcc');
const generateRfc = require('./rfc');

program.version(config.version)
program.on('--help', () => {
    showInfo("react-add rcc -> Creates a React class component");
    showInfo("react-add rfc -> Creates a React function component");
});
program.parse(process.argv);

const [, , ...args] = process.argv;


// Check if user is on root path of the project
if (!onRootOfProject()) return null;

// React class component generate
else if (args[0] === 'rcc')
    generateRcc();

// React function component generate
else if (args[0] === 'rfc')
    generateRfc();
else if (!args[0]) {
    showInfo(`You cannot execute a command without any arguments. Please use --help for more informations.`);
}