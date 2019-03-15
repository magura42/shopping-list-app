import React from "react";
var redBorder = {
    border: "1px solid red",
    width: "30em",
    padding: "5px",
    clear: "both",
};
var SingleUserParamAndData = function (_a) {
    var user = _a.user, component = _a.component;
    return (React.createElement("div", { style: redBorder }, React.cloneElement(component, user)));
};
export default SingleUserParamAndData;
//# sourceMappingURL=SingleUserParamAndData.js.map