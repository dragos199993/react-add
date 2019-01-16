const defaultComponent = (name) => `import React, { Component } from 'react';

class ${name} extends Component{
    render(){
        return (
            <div>Component created</div>
        )
    }
}

export default ${name};
`

const withRedux = (name) => `import React, { Component } from 'react';
import { connect } from 'react-redux';

class ${name} extends Component{
    render(){
        return (
            <div>Component created</div>
        )
    }
}

export default connect()(${name});
`

module.exports = {
    defaultComponent,
    withRedux
}