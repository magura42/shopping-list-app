import React, {Component} from "react";
import IShoppingList from "./IShoppingList";
import ShoppingListEntry from "./ShoppingListEntry";
import Button from '@material-ui/core/Button';

class ShoppingList extends Component<IShoppingList> {

  render() {
    return (
        <span>
          { this.props.listEntries.map(entry =>
              <ShoppingListEntry key={"shoppingListEntry" + entry.entryName+entry.number} {...entry}/>
          )}
          <Button variant="contained" color="primary"> Do it</Button>
        </span>
    )
  }
}

export default ShoppingList;