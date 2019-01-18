const defaultComponent = (name) => `import React, { Component } from 'react';

class ${name} extends Component{
    render(){
        return (
            <div className="${name}">Component created</div>
        )
    }
}

export default ${name};
`

module.exports = {
    defaultComponent,
}