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
var UserCreationViaRefCallback = /** @class */ (function (_super) {
    __extends(UserCreationViaRefCallback, _super);
    function UserCreationViaRefCallback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserCreationViaRefCallback.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("label", null, "First name:"),
                React.createElement("input", { type: "text", ref: function (c) { return _this.firstName = c; } })),
            React.createElement("div", null,
                React.createElement("label", null, "Last name:"),
                React.createElement("input", { type: "text", ref: function (c) { return _this.lastName = c; } })),
            React.createElement("div", null,
                React.createElement("button", { onClick: function () {
                        return _this.props.submitUser({
                            firstName: _this.firstName ? _this.firstName.value : "",
                            lastName: _this.lastName ? _this.lastName.value : "",
                        });
                    } }, "Submit"))));
    };
    return UserCreationViaRefCallback;
}(Component));
export default UserCreationViaRefCallback;
//# sourceMappingURL=UserCreationViaRefCallback.js.map