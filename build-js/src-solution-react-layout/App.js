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
import User from "./User";
import SingleUser from "./SingleUser";
import SingleUserMonolith from "./SingleUserMonolith";
import SingleUserWrapper from "./SingleUserWrapper";
import SingleUserParam from "./SingleUserParam";
import SingleUserParamAndData from "./SingleUserParamAndData";
import UserList from "./UserList";
var users = [
    { firstName: "Nicole", lastName: "Rauch" },
    { firstName: "Peter", lastName: "Müller" },
    { firstName: "Fritz", lastName: "Walter" }
];
var user = { firstName: "Peter", lastName: "Müller" };
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(SingleUserMonolith, { user: user }),
            React.createElement("br", null),
            React.createElement(SingleUser, { user: user }),
            React.createElement("br", null),
            React.createElement(SingleUserWrapper, null,
                React.createElement(User, __assign({}, user))),
            React.createElement("br", null),
            React.createElement(SingleUserParam, { component: React.createElement(User, __assign({}, user)) }),
            React.createElement("br", null),
            React.createElement(SingleUserParamAndData, { component: React.createElement(User, { firstName: "", lastName: "" }), user: user }),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement(UserList, { users: users, component: React.createElement(User, { firstName: "", lastName: "" }) })));
    };
    return default_1;
}(Component));
export default default_1;
//# sourceMappingURL=App.js.map