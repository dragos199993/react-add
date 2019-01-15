#!/usr/bin/env node
const inquierer = require('inquirer');
const program = require('commander');
const clear = require('clear');
const { textSync } = require('figlet');
const chalk = require('chalk');
const { outputFile, createWriteStream, readFile } = require('fs-extra');
const { showSuccess } = require('./data/utils');
const defaultClassComponent = require('./generate-components/class/default');
const { config } = require('./config');

program.version(config.version).parse(process.argv);
const [, , ...args] = process.argv;

if (args[0] === 'rcc') {
    outputFile(`./src/components/${args[1]}.jsx`, defaultClassComponent(args[1]))
    showSuccess(`Done! ${args[1]} component added.`)
}

if (args[0] === 'rfc') {
    outputFile(`./src/components/${args[1]}.jsx`, defaultClassComponent(args[1]))
    showSuccess(`Done! ${args[1]} component added.`)
}

if (args[0] === 'rfc') {
    outputFile(`./src/components/${args[1]}.jsx`, defaultClassComponent(args[1]))
    showSuccess(`Done! ${args[1]} component added.`)
}