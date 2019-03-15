import React from "react";
import ReactDOM from "react-dom";
import UserCreation from "./UserCreationWithFormSubmit";
import UserCreationControlled from "./UserCreationControlledComponent";
ReactDOM.render(React.createElement("div", null,
    React.createElement(UserCreation, null),
    React.createElement(UserCreationControlled, { submitUser: function (d) { return console.log(d); } })), document.getElementById("start"));
//# sourceMappingURL=index.js.map