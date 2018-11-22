import React from 'react'

import TextField from 'material-ui/TextField';

class Form extends React.Component {
    state = {
        text: ''
    }

    render() {
        return (
            <div>
                <div>
                    <TextField
                        type="text"
                        value={this.state.text}
                        onChange={(event) => this.setState({text: event.target.value})}
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    value={this.state.text}
                    />
                </div>
            </div>
        )
    }
}

export default Form