import React from "react";
var UserList = function (_a) {
    var users = _a.users, component = _a.component;
    return (React.createElement("ul", null, users.map(function (user) { return React.createElement("li", { key: "userlist_" + user.firstName
            + user.lastName }, React.cloneElement(component, user)); })));
};
export default UserList;
//# sourceMappingURL=UserList.js.map