var _a;
import { combineReducers } from "redux";
import { createReducer } from "../src-solution-redux-big/createReducer";
import { ActionTypes } from "./actions";
var INITIAL_STATE = {
    users: [
        { firstName: "Nicole", lastName: "Rauch" },
        { firstName: "Peter", lastName: "Müller" },
        { firstName: "Fritz", lastName: "Walter" }
    ]
};
var users = createReducer(INITIAL_STATE.users, (_a = {},
    _a[ActionTypes.USER_ADDED] = function (currentUsers, action) { return currentUsers.concat(action.user); },
    _a[ActionTypes.USERS_SET] = function (_, action) { return action.users; },
    _a));
export default combineReducers({
    users: users,
});
//# sourceMappingURL=reducers.js.map