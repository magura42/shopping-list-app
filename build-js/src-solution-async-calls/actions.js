import * as backend from "./ajaxcalls";
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["USER_ADDED"] = "USER_ADDED";
    ActionTypes["USERS_SET"] = "USERS_SET";
})(ActionTypes || (ActionTypes = {}));
export var addUser = function (user) { return ({
    type: ActionTypes.USER_ADDED,
    user: user
}); };
export var submitUser = function (user) {
    return function (dispatch) {
        backend.postUser(user, function (returnCode) {
            if (returnCode === 200) {
                dispatch(addUser(user));
            }
        });
    };
};
export var setUsers = function (users) { return ({
    type: ActionTypes.USERS_SET,
    users: users
}); };
export var loadUsers = function (dispatch) {
    backend.fetchUsers(function (users) {
        dispatch(setUsers(users));
    });
};
//# sourceMappingURL=actions.js.map