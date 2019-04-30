import React, { Component } from 'react';
import ShoppingList from "./ShoppingList";
import WikiSearch from "./WikiSearch";

import {IShoppingListEntry} from "./IShoppingListEntry";
import {Tabs} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";

const entries: IShoppingListEntry[] = [{
  entryName: "Apfel",
  number: 2
}];

class Navigation extends Component {

  state = {
    value: 0,
  };

  event = {};

  handleChange = (event, value) => {
    this.event = event;
    this.setState({ value });
  };

  render() {

    const { value } = this.state;

    return (
          <div>
            <AppBar position="static">
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Shopping List" />
                <Tab label="Wiki Search" />
                <Tab label="tab3" />
              </Tabs>
            </AppBar>
            {value === 0 && <div><ShoppingList listEntries={entries}/></div>}
            {value === 1 && <div><WikiSearch/></div>}
            {value === 2 && <div>Item Three</div>}
          </div>
    )
  }
}

// let mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//     todoCount: state.todos.length
//   }
// }
// let mapDispatchToProps = {}
//
// let NavigationContainer =
//     connect(mapStateToProps, mapDispatchToProps)(Navigation);


export default Navigation;