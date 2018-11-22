import React from 'react'

class Form extends React.Component {
    state = {
        text: ''
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={(event) => this.setState({text: event.target.value})}
                />
                <input
                   disabled
                   value={this.state.text}
                />
            </div>
        )
    }
}

export default Form