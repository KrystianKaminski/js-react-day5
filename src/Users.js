import React from "react";

class Users extends React.Component {
  state = {
      users: null
  }

  componentDidMount() {
      fetch(`https://randomuser.me/api`)
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
                    this.state.users.map(user => (
                        <div>
                            {user.name.first} {user.name.last}
                        </div>
                    ))
                    :
                    "Ładowanie.."
            }
        </div>
    );
  }
}

export default Users;
