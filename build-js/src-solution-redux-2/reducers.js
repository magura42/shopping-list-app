var INITIAL_STATE = {
    users: [
        { firstName: "Nicole", lastName: "Rauch" },
        { firstName: "Peter", lastName: "Müller" },
        { firstName: "Fritz", lastName: "Walter" }
    ]
};
export default function (state, _) {
    if (state === void 0) { state = INITIAL_STATE; }
    if (_ === void 0) { _ = {}; }
    return state;
}
//# sourceMappingURL=reducers.js.map