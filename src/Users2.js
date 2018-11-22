import React from 'react'

class Users2 extends React.Component {
    state = {
        users: null,
    }

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=${this.props.numberOfResults}`)
            .then(response => response.json())
            .then(data => this.setState({
                users: data.results
            }))
    }

    render() {
        return (
            <div>
                {
                    this.state.users &&
                    this.state.users.map &&
                        this.state.users.map((user, i) => (
                        <div
                            key={user.login.uuid}
                        >
                            {i +1}: {user.email}
                        </div>
                    ))
                    }
            </div>
        )
    }
}

export default Users2

Users2.defaultProps = {
    numberOfResults: 10
}