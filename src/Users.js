import React from "react";

class Users extends React.Component {
  state = {
      users: null
  }

  componentDidMount() {
      
  }

  render() {
    return (
        <div>
            {this.state.users}
        </div>
    );
  }
}

export default Users;
