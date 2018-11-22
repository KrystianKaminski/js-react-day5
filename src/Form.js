import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <div>
                <h1></h1>
                <input
                    type="text"
                    onChange={(event) => console.log(event.target.value)}
                >
                </input>
            </div>
        )
    }
}

export default Form