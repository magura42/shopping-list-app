var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from "react";
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import HelloWorld from "../src-solution-react/HelloWorldFunctionalComponent";
import User from "../src-solution-react/UserWithHighlight";
import UserList from "../src-solution-react/UserListWithHighlight";
import UserCreationViaInternalState from "../src-solution-react/UserCreationViaInternalState";
var users = [
    { firstName: "Nicole", lastName: "Rauch" },
    { firstName: "Peter", lastName: "Müller" },
    { firstName: "Fritz", lastName: "Walter" }
];
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        return (React.createElement(Router, null,
            React.createElement("div", null,
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/" }, "Hello World")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/user/Nicole/Rauch" }, "User")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/users" }, "User List")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/creation" }, "User Creation"))),
                React.createElement("hr", null),
                React.createElement(Route, { exact: true, path: "/", component: HelloWorld }),
                React.createElement(Route, { path: "/user/:firstName/:lastName", render: function (_a) {
                        var match = _a.match;
                        return React.createElement(User, { firstName: match.params.firstName, lastName: match.params.lastName });
                    } }),
                React.createElement(Route, { path: "/users", render: function () { return React.createElement(UserList, { users: users }); } }),
                React.createElement(Route, { path: "/creation", render: function () { return React.createElement(UserCreationViaInternalState, { submitUser: function () {
                        } }); } }))));
    };
    return default_1;
}(Component));
export default default_1;
//# sourceMappingURL=App.js.map