import React, {Component} from "react";
import {IUserProperties, IUserState} from "./IUserProperties";
import Panel from "./Panel";

class User extends Component<IUserProperties, IUserState> {

  constructor(properties: IUserProperties) {
    super(properties);
    this.changeBackground = this.changeBackground.bind(this)
    this.state = {
      clickcounter: 1
    };
  }

  changeBackground = () => {
    this.setState({clickcounter: this.state.clickcounter + 1})
  };

  render() {

    let bcolor: string = this.state.clickcounter % 2 == 0 ? "azure" : "";

    return (
      <Panel title="Benutzer">
        <p onClick={() => this.changeBackground()} style={{backgroundColor: bcolor}}>Vorname: {this.props.firstname}</p>
        <p>Nachname: {this.props.lastname}</p>
      </Panel>
    )
  }
}

export default User;