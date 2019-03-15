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
import { connect } from "react-redux";
import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";
import { submitUser, loadUsers } from "./actions";
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(_a) {
        var dispatch = _a.dispatch;
        var _this = _super.call(this, { users: [], dispatch: dispatch }) || this;
        loadUsers(dispatch);
        return _this;
    }
    AppComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(UserList, { users: this.props.users }),
            React.createElement(UserCreation, { submitUser: function (user) { _this.props.dispatch(submitUser(user)); } })));
    };
    return AppComponent;
}(Component));
export { AppComponent };
export default connect(function (state) { return state; })(AppComponent);
//# sourceMappingURL=App.js.map