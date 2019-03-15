import React from "react";
import ReactDOM from "react-dom";
import reducers from "../src-solution-redux-4/reducers";
import App from "../src-solution-redux-4/App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
var enhancedCompose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
var store = createStore(reducers, enhancedCompose(
// applyMiddleware goes here if required
));
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(App, null)), document.getElementById("start"));
//# sourceMappingURL=index_devtools.js.map