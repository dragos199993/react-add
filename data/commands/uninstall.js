const { removeSync, outputFile } = require('fs-extra');
const { showSuccess } = require('../utils/messages');
const inquirer = require('inquirer');

module.exports = reactInfo => {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmDelete',
      message: 'Are you sure you want to delete all components installed?'
    },
    {
      type: 'confirm',
      name: 'deleteFromReactInfo',
      message: 'Do you want to keep the components stored in reactadd json file?'
    }
  ]
  ).then(answers => {
    if (answers.confirmDelete) {
      reactInfo.components.map(component => {
        let name = component.rcc[0].toUpperCase() + component.rcc.slice(1);
        removeSync(`./src/components/${name}`)
      })
    }
    if (answers.deleteFromReactInfo) {
      let newReactInfo = { ...reactInfo };
      newReactInfo.components = [];
      outputFile('./reactadd.json', JSON.stringify(newReactInfo, null, 4));
    }
    showSuccess('Succesfuly removed all components installed.');
  })
}