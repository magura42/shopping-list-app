import React, {Component} from "react";
import {IPanel} from "./IPanel";

import "./Panel.scss";

class Panel extends Component<IPanel> {
  render() {
    return (
        <div className="Panel">
          <h2 className="head">{this.props.title}</h2>
          <span className="content">{this.props.children}</span>
        </div>
    )
  }
}

export default Panel;