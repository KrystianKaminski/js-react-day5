import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <div>
                <h1></h1>
                <input
                    type="text"
                    onChange={(event) => console.log('Change!')}
                >
                </input>
            </div>
        )
    }
}

export default Form