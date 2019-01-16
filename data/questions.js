const inquierer = require('inquirer');

const rccQuestions = [
  {
    type: 'input',
    name: 'rcc',
    message: 'Name of your component',
    validate: function(text) { // Validations here
      return true;
    }
  },
  {
    type: 'confirm',
    name: 'redux',
    message: 'Add redux connect to component?'
  },
  {
    type: 'list',
    name: 'style',
    message: 'Select a style for the component',
    choices: [
      'NONE',
      new inquierer.Separator(),
      'scss',
      'less',
      'css'
    ]
  }
];

const rfcQuestions = [
  {
    type: 'input',
    name: 'rfc',
    message: 'Name of your component',
    validate: function(text) { // Validations here
      return true;
    }
  }
];

module.exports = {
  rccQuestions,
  rfcQuestions
}