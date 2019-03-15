import React, {Component} from "react";
import IUserList from "./IUserList";
import User from "./User";

class UserList extends Component<IUserList> {

  render() {
    return (
        <span>
          { this.props.users.map(user =>
              //<User key={"userList" + user.firstname+user.lastname} firstname={user.firstname} lastname={user.lastname}></User>
              <User key={"userList" + user.firstname+user.lastname} {...user}></User>
          )}
        </span>
    )
  }
}

export default UserList;