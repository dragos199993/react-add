const inquierer = require('inquirer');
const { outputFile } = require('fs-extra');
const { showSuccess } = require('../../../utils/messages');
const { defaultFunctionComponent } = require('../../../../factory/function/default');
const { rfcQuestions } = require('../../../questions');

module.exports = () => {
  inquierer
    .prompt(rfcQuestions)
    .then(answers => {
      outputFile(`./src/components/${answers.rfc}.jsx`, defaultFunctionComponent(answers.rfc))
      showSuccess(`Done! ${answers.rfc} component added.`)
    });
}