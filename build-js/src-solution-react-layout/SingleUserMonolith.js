import React from "react";
var redBorder = {
    border: "1px solid red",
    width: "30em",
    padding: "5px",
    clear: "both",
};
var SingleUserMonolith = function (_a) {
    var user = _a.user;
    return (React.createElement("div", { style: redBorder },
        React.createElement("div", null,
            React.createElement("label", null, "First name: "),
            React.createElement("span", null, user.firstName),
            React.createElement("br", null),
            React.createElement("label", null, "Last name: "),
            React.createElement("span", null, user.lastName),
            React.createElement("br", null))));
};
export default SingleUserMonolith;
//# sourceMappingURL=SingleUserMonolith.js.map