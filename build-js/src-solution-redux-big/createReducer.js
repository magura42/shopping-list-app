export function createReducer(initialState, handlers) {
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        if (action === void 0) { action = { type: "dummy" }; }
        return handlers.hasOwnProperty(action.type) ?
            handlers[action.type](state, action) :
            state;
    };
}
//# sourceMappingURL=createReducer.js.map