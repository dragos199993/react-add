

const { outputFile } = require('fs-extra');
const inquirer = require('inquirer');
const { initQuestions } = require('../questions');
const { showInfo } = require('../utils/messages');

module.exports = () => {
  showInfo("Setting up configuration for this project...");
  inquirer
    .prompt(initQuestions).then(answers => {
  
      let reactInfo = {
        name: answers.name,
        description: answers.description,
        author: answers.author,
        components: []
      }
  
      outputFile('./reactadd.json', JSON.stringify(reactInfo, null, 4));
    });
}

