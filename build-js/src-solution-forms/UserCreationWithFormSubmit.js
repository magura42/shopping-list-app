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
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.onSubmit = function (e) {
        e.preventDefault();
        console.log(e.currentTarget["firstname"].value + " " + e.currentTarget["lastname"].value);
    };
    default_1.prototype.render = function () {
        return (React.createElement("form", { onSubmit: this.onSubmit },
            React.createElement("div", null,
                React.createElement("label", null, "First name:"),
                React.createElement("input", { type: "text", name: "firstname" })),
            React.createElement("div", null,
                React.createElement("label", null, "Last name:"),
                React.createElement("input", { type: "text", name: "lastname" })),
            React.createElement("button", { type: "submit" }, "Submit")));
    };
    return default_1;
}(Component));
export default default_1;
//# sourceMappingURL=UserCreationWithFormSubmit.js.map