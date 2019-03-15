import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from './componets/HelloWorld';
import HelloWorldFunctional, { A } from "./componets/HelloWorldFunctional";
ReactDOM.render(React.createElement("div", null,
    React.createElement(HelloWorld, null),
    "Antwort: ",
    A,
    React.createElement(HelloWorldFunctional, null)), document.getElementById("start"));
//# sourceMappingURL=index.js.map