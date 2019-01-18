
const inquierer = require('inquirer');
const { outputFile } = require('fs-extra');
const { showDanger, showSuccess } = require('../../../utils/messages');
const { rccQuestions } = require('../../../questions');
const rccGenerator = require('./generator');
const { checkCapitalizedLetter, componentAlreadyExists } = require('../../../utils');

module.exports = () => {
  inquierer
    .prompt(rccQuestions)
    .then(answers => {

      let reactInfo = require('../../../../reactadd.json');

      componentAlreadyExists(reactInfo, answers);
      
      reactInfo.components.push(answers);
      
      rccGenerator(answers);

      outputFile('./reactadd.json', JSON.stringify(reactInfo, null, 4));
    });

}