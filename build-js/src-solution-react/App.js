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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from "react";
import HelloWorld from "./HelloWorldFunctionalComponent";
import User from "./UserWithHighlight";
import UserList from "./UserListWithHighlight";
import UserCreationViaInternalState from "./UserCreationViaInternalState";
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
        return (React.createElement("div", null,
            React.createElement(HelloWorld, null),
            React.createElement(User, __assign({}, users[0])),
            React.createElement(UserList, { users: users }),
            React.createElement(UserCreationViaInternalState, { submitUser: function () { } })));
    };
    return default_1;
}(Component));
export default default_1;
//# sourceMappingURL=App.js.map