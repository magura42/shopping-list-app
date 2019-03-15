var INITIAL_STATE = {
    users: [
        { firstName: "Nicole", lastName: "Rauch" },
        { firstName: "Peter", lastName: "Müller" },
        { firstName: "Fritz", lastName: "Walter" }
    ]
};
export var UserActions;
(function (UserActions) {
    UserActions["USER_ADDED"] = "USER_ADDED";
})(UserActions || (UserActions = {}));
export function addUser(user) {
    return {
        type: UserActions.USER_ADDED,
        payload: user
    };
}
function users(currentUsers, action) {
    if (currentUsers === void 0) { currentUsers = INITIAL_STATE.users; }
    switch (action.type) {
        case UserActions.USER_ADDED:
            return currentUsers.concat(action.payload);
    }
    return currentUsers;
}
export default function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    if (action === void 0) { action = { type: "Dummy" }; }
    return {
        users: users(state.users, action)
    };
}
//# sourceMappingURL=reducers.js.map