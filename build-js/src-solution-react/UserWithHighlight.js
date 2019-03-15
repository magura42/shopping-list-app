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
var UserWithHighlight = /** @class */ (function (_super) {
    __extends(UserWithHighlight, _super);
    function UserWithHighlight(props) {
        var _this = _super.call(this, props) || this;
        _this._handleToggleClick = _this._handleToggleClick.bind(_this);
        _this.state = { highlighted: false };
        return _this;
    }
    UserWithHighlight.prototype.render = function () {
        var highlightColor = this.state.highlighted
            ? "#FF0000" : "#FFFFFF";
        return (React.createElement("div", { onClick: this._handleToggleClick, style: { cursor: "pointer" } },
            React.createElement("label", null, "First name: "),
            React.createElement("span", { style: { backgroundColor: highlightColor } }, this.props.firstName),
            React.createElement("br", null),
            React.createElement("label", null, "Last name: "),
            React.createElement("span", null, this.props.lastName),
            React.createElement("br", null)));
    };
    UserWithHighlight.prototype._handleToggleClick = function () {
        this.setState({ highlighted: !this.state.highlighted });
    };
    return UserWithHighlight;
}(Component));
export default UserWithHighlight;
//# sourceMappingURL=UserWithHighlight.js.map