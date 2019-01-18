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

const initQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter project name: '
  },
  {
    type: 'input',
    name: 'description',
    message: 'Short description of project: '
  },
  {
    type: 'input',
    name: 'author',
    message: 'Author name: '
  }
]

module.exports = {
  rccQuestions,
  rfcQuestions,
  initQuestions
}