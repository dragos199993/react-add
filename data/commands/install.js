const rccGenerator = require('../../data/commands/components/rcc/generator');

module.exports = () => {
  let reactInfo = require('../../reactadd.json');
  reactInfo.components.map(component => {
    if(component.rcc){
      rccGenerator(component);
    }
  })
}