import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from './components/HelloWorld';
import HelloWorldFunctional, {A} from "./components/HelloWorldFunctional";
import User from "./components/User"
import {IUserProperties} from "./components/IUserProperties";
import UserList from "./components/UserList";

let defaultUsers: Array<IUserProperties> = [
  {lastname: "harrer", firstname: "manfred"}, {lastname: "müller", firstname: "fritz"}
];

ReactDOM.render(
    <div>
      UserList:
      <UserList users={defaultUsers} />
      User:
      <User lastname="harrer" firstname="manfred"></User>

      <HelloWorld/>
      Antwort: {A}
      <HelloWorldFunctional/>
    </div>
  , document.getElementById("start")
);

