import React from "react";
import ReactDOM from "react-dom";
import reducers from "./reducers";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
var store = createStore(reducers, applyMiddleware(thunkMiddleware));
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(App, null)), document.getElementById("start"));
//# sourceMappingURL=index.js.map