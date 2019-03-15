import expect from "must";
import reducer, { addUser, UserActions } from "../src-solution-redux-4/reducers";
var user = { firstName: "firstName", lastName: "lastName" };
var stateUserOne = { firstName: "Peter", lastName: "Klaus" };
var stateUserTwo = { firstName: "Max", lastName: "Mustermann" };
describe('reducers', function () {
    describe('Actions', function () {
        it('creates a USER_ADDED action', function () {
            expect(addUser(user)).to.eql({ type: UserActions.USER_ADDED, payload: user });
        });
    });
    describe('reducer function', function () {
        it('adds a user when there are no users yet', function () {
            var EMPTY_STATE = { users: [] };
            var newState = reducer(EMPTY_STATE, addUser(user));
            expect(newState).to.eql({ users: [user] });
        });
        it('adds a user when there are already users in the state', function () {
            var NONEMPTY_STATE = { users: [stateUserOne, stateUserTwo] };
            var newState = reducer(NONEMPTY_STATE, addUser(user));
            expect(newState).to.eql({ users: [stateUserOne, stateUserTwo, user] });
        });
    });
});
//# sourceMappingURL=reducersTest.js.map