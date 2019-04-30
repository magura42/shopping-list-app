import React, {Component} from "react";
import IShoppingList from "./IShoppingList";
import ShoppingListEntry from "./ShoppingListEntry";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";

interface ShoppingListState {
  newEntry: string
}

class ShoppingList extends Component<IShoppingList, ShoppingListState> {

  constructor(properties: IShoppingList) {
    super(properties);
    // this.props.listEntries = [];

    this.onEntryAdd = this.onEntryAdd.bind(this);
    this.onEntryInputChange = this.onEntryInputChange.bind(this);

    this.state = { newEntry: "" }
  }

  onEntryAdd() {
    const maxId = this.getNextIndex();
    this.props.listEntries.push({number: (maxId + 1), entryName: this.state.newEntry});
    this.setState({newEntry: ""})
  }

  onEntryInputChange(event) {
    if (event.target != null) {
      this.setState({
        newEntry: event.target.value
      })
    }
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
            <TextField onChange={this.onEntryInputChange} value={this.state.newEntry} label="Ware"/>
            <Button disabled={this.state.newEntry === ""}onClick={this.onEntryAdd} variant="contained" color="primary">Hinzufügen</Button>
          </div>
        </span>
    )
  }

  private getNextIndex() {
    const entries = this.props.listEntries;
    let maxId = 0;
    for(const entry of entries) {
      if (entry.number > maxId) {
        maxId = entry.number;
      }
    }
    return maxId;

  }
}

export default ShoppingList;