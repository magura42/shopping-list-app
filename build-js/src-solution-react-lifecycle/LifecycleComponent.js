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
import ChildComponent from "./ChildComponent";
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super.call(this, {}) || this;
        _this.state = { checked: true };
        console.log("Lifecycle Component constructor.");
        return _this;
    }
    default_1.prototype.componentDidMount = function () {
        console.log("Lifecycle Component did mount.");
    };
    default_1.prototype.shouldComponentUpdate = function () {
        console.log("Should Lifecycle Component update?");
        return true;
    };
    default_1.prototype.componentDidUpdate = function () {
        console.log("Lifecycle Component did update.");
    };
    default_1.prototype.componentWillUnmount = function () {
        console.log("Lifecycle Component will unmount.");
    };
    default_1.prototype.render = function () {
        var _this = this;
        console.log("Lifecycle Component render.");
        return (React.createElement("div", null,
            React.createElement(ChildComponent, { checked: this.state.checked }),
            React.createElement("input", { type: "checkbox", checked: this.state.checked, onChange: function () { _this.setState({ checked: !_this.state.checked }); } })));
    };
    return default_1;
}(Component));
export default default_1;
//# sourceMappingURL=LifecycleComponent.js.map