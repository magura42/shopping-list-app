import React, {Component} from "react";
import IShoppingList from "./IShoppingList";
import ShoppingListEntry from "./ShoppingListEntry";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";

class ShoppingList extends Component<IShoppingList> {

  constructor(properties: IShoppingList) {
    super(properties);
    // this.props.listEntries = [];
  }

  render() {
    return (
        <span>
          {
            this.props.listEntries.map(entry =>
              <ShoppingListEntry key={"shoppingListEntry" + entry.entryName + entry.number} {...entry}/>
            )
          }
          <div>
            <TextField label="Ware"/>
            <Button variant="contained" color="primary">Hinzufügen</Button>
          </div>
        </span>
    )
  }
}

export default ShoppingList;