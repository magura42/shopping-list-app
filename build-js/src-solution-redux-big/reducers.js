var _a, _b, _c;
import { combineReducers } from "redux";
import { createReducer } from "./createReducer";
var INITIAL_STATE = {
    users: [],
    products: [],
    otherData: null
};
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["USER_ADDED"] = "USER_ADDED";
    ActionTypes["PRODUCT_ADDED"] = "PRODUCT_ADDED";
    ActionTypes["DATA_SET"] = "DATA_SET";
    ActionTypes["DATA_REMOVED"] = "DATA_REMOVED";
})(ActionTypes || (ActionTypes = {}));
export function addUser(user) {
    return {
        type: ActionTypes.USER_ADDED,
        user: user
    };
}
var users = createReducer(INITIAL_STATE.users, (_a = {},
    _a[ActionTypes.USER_ADDED] = function (currentUsers, action) { return currentUsers.concat(action.user); },
    _a));
export function addProduct(product) {
    return {
        type: ActionTypes.PRODUCT_ADDED,
        product: product
    };
}
var products = createReducer(INITIAL_STATE.products, (_b = {},
    _b[ActionTypes.PRODUCT_ADDED] = function (currentProducts, action) { return currentProducts.concat(action.product); },
    _b));
export function setData(data) {
    return {
        type: ActionTypes.DATA_SET,
        data: data
    };
}
export function removeData() {
    return {
        type: ActionTypes.DATA_REMOVED
    };
}
var otherData = createReducer(INITIAL_STATE.otherData, (_c = {},
    _c[ActionTypes.DATA_SET] = function (data, _) { return data; },
    _c[ActionTypes.DATA_REMOVED] = function (_, __) { return null; },
    _c));
export default combineReducers({
    users: users,
    products: products,
    otherData: otherData
});
//# sourceMappingURL=reducers.js.map