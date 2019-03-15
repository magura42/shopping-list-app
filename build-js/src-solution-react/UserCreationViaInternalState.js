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
var UserCreationViaInternalState = /** @class */ (function (_super) {
    __extends(UserCreationViaInternalState, _super);
    function UserCreationViaInternalState(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { firstName: "", lastName: "" };
        return _this;
    }
    UserCreationViaInternalState.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("label", null, "First name:"),
                React.createElement("input", { type: "text", onBlur: function (e) { return _this.setState({ firstName: e.target.value }); } })),
            React.createElement("div", null,
                React.createElement("label", null, "Last name:"),
                React.createElement("input", { type: "text", onBlur: function (e) { return _this.setState({ lastName: e.target.value }); } })),
            React.createElement("div", null,
                React.createElement("button", { onClick: function () {
                        _this.props.submitUser(_this.state);
                    } }, "Submit"))));
    };
    return UserCreationViaInternalState;
}(Component));
export default UserCreationViaInternalState;
//# sourceMappingURL=UserCreationViaInternalState.js.map