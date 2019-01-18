const inquierer = require('inquirer');
const { outputFile } = require('fs-extra');
const { showSuccess } = require('../data/utils/messages');
const { defaultFunctionComponent } = require('../factory/function/default');
const { rfcQuestions } = require('../data/questions');

module.exports = () => {
  inquierer
    .prompt(rfcQuestions)
    .then(answers => {
      outputFile(`./src/components/${answers.rfc}.jsx`, defaultFunctionComponent(answers.rfc))
      showSuccess(`Done! ${answers.rfc} component added.`)
    });

}