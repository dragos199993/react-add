const defaultFunctionComponent = (name) => `import React from 'react';

const ${name} = () => (
  <div>Component created</div>
);

export default ${name};
`

module.exports = {
  defaultFunctionComponent
}