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
export default function (state, _) {
    if (state === void 0) { state = INITIAL_STATE; }
    if (_ === void 0) { _ = {}; }
    return state;
}
//# sourceMappingURL=reducers.js.map