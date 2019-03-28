import React from "react";
import ReactDOM from "react-dom";
import Panel from "./components/Panel";
import ShoppingList from "./components/ShoppingList";
import {IShoppingListEntry} from "./components/IShoppingListEntry";
import WikiSearch from "./components/WikiSearch";

const items: IShoppingListEntry[] = [
  {
    entryName: "Breze",
    number: 42
  },
  {
    entryName: "Apfel",
    number: 3
  },
  {
    entryName: "O-Saft",
    number: 2
  }
];

ReactDOM.render(


    <div>
      <Panel title="Liste">
        <ShoppingList listEntries={items}/>
      </Panel>
      <WikiSearch/>
    </div>
  , document.getElementById("start")
);

