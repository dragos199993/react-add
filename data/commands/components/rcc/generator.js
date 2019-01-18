
const { outputFile, readFile } = require('fs-extra');
const { insertIntoFile, checkCapitalizedLetter } = require('../../../utils');
const { showInfo, showSuccess } = require('../../../utils/messages');
const { defaultComponent } = require('../../../../factory/class/default');
const exec = require('child_process').exec;
const { reactInfo } = require('../../../utils');

module.exports = answers => {
  let name = checkCapitalizedLetter(answers.rcc);
  let path = `./src/components/${name}/${name}.jsx`;

  outputFile(path, defaultComponent(name))

  if (answers.redux) {

    setTimeout(() => {
      // Add export default line
      outputFile(path, insertIntoFile(path, 2, `export default connect()(${name})`, true))
    }, 50);

    setTimeout(() => {
      // Import connect from react-redux
      outputFile(path, insertIntoFile(path, 1, `import { connect } from 'react-redux'`));
    }, 75);

    // Check if redux and react-redux is installed
    readFile('./package.json', (err, data) => {
      if (err) throw err;
      if (data.indexOf('redux') < 0 && data.indexOf('react-redux')) {
        showInfo("Installing redux and react-redux packages... (if you already have the packages installed you shouldn't see this!)")
        exec(`npm install redux react-redux --save`)
      }
    })

  }

  // STYLE

  let style = reactInfo().globalStyle;
    if (style !== 'NONE') {

      const { css } = require('../../../../factory/style/css');
      // Check to see if node-sass is installed
      readFile('./package.json', (err, data) => {
        if (err) throw err;
        if (data.indexOf('node-sass') < 0) {
          if (style === 'scss') {
            showInfo("Installing node-sass package... (if you already have the packages installed you shouldn't see this!)")
            exec(`npm install node-sass --save`)
          }
        }
      });

      // Less warning message
      if (style === 'less') showInfo("There is no easy way to use less files in react. Please do some research before using it!")

      // Remove all styling files before adding a new one
      // exec(`rm -rf ./src/components/${name}/${name}.scss ./src/components/${name}/${name}.css ./src/components/${name}/${name}.less `);

      // TODO: This is only a quick fix. It will be fixed soon
      setTimeout(() => {

        // Add the style import
        outputFile(path, insertIntoFile(path, 1, `import './${name}.${style}'`));

        // Create style file
        outputFile(`./src/components/${name}/${name}.${style}`, css(name));

      }, 100);


      showSuccess(`Done! Class component ${name} component added.`)

    }
}