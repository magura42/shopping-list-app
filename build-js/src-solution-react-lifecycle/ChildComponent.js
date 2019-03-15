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
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1(props) {
        var _this = _super.call(this, props) || this;
        console.log("Child Component constructor.");
        return _this;
    }
    default_1.prototype.componentDidMount = function () {
        console.log("Child Component did mount.");
    };
    default_1.prototype.shouldComponentUpdate = function () {
        console.log("Should Child Component update?");
        return true;
    };
    default_1.prototype.componentDidUpdate = function () {
        console.log("Child Component did update.");
    };
    default_1.prototype.componentWillUnmount = function () {
        console.log("Child Component will unmount.");
    };
    default_1.prototype.render = function () {
        console.log("Child Component render.");
        return React.createElement("p", null, this.props.checked ? "Checked" : "Unchecked");
    };
    return default_1;
}(Component));
export default default_1;
//# sourceMappingURL=ChildComponent.js.map