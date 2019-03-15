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
import React from "react";
import User from "./User";
var redBorder = {
    border: "1px solid red",
    width: "30em",
    padding: "5px",
    clear: "both",
};
var SingleUser = function (_a) {
    var user = _a.user;
    return (React.createElement("div", { style: redBorder },
        React.createElement(User, __assign({}, user))));
};
export default SingleUser;
//# sourceMappingURL=SingleUser.js.map