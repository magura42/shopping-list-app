import React, {Component} from "react";
import {IShoppingListEntry, IUserState} from "./IShoppingListEntry";
import Panel from "./Panel";

class ShoppingListEntry extends Component<IShoppingListEntry, IUserState> {

  constructor(properties: IShoppingListEntry) {
    super(properties);
  }

  render() {
    return (
      <Panel title="Einkaufitem">
        <p>Item: {this.props.entryName}, Anzahl: {this.props.number}</p>
      </Panel>
    )
  }
}

export default ShoppingListEntry;