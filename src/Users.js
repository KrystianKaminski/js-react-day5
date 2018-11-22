import React from "react";

class Users extends React.Component {
  state = {
      users: null
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
                this.state.users ? 
                    this.state.users.map ?
                        this.state.users.map(user => (
                            <div
                                key={user.login.uuid}
                            >
                                {user.name.first} {user.name.last}
                            </div>
                        ))
                        : 'Error!'
                    :
                    "Ładowanie.."
            }
        </div>
    );
  }
}

Users.defaultProps = {
    numberOfResults: 2
}

export default Users;
