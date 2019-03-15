import React from "react";
import expect from "must";
import { mount } from "enzyme";
import sinon from "sinon";
import { AppComponent } from "../src-solution-redux-4/App";
import { UserActions } from "../src-solution-redux-4/reducers";
describe('App', function () {
    it('displays its user list', function () {
        var app = mount(React.createElement(AppComponent, { users: [{ firstName: "Petra", lastName: "Meier" }, { firstName: "Peter", lastName: "Miller" }], dispatch: function () { } }));
        var nameParts = app.find("span");
        expect(nameParts.map(function (c) { return c.text(); })).to.eql(["Petra", "Meier", "Peter", "Miller"]);
    });
    it('invokes the dispatcher with a USER_ADDED action', function () {
        var dispatcher = sinon.spy();
        var app = mount(React.createElement(AppComponent, { users: [], dispatch: dispatcher }));
        var button = app.find("button");
        button.simulate("click");
        expect(dispatcher.getCall(0).args[0]).to.eql({ type: UserActions.USER_ADDED, payload: { firstName: "", lastName: "" } });
    });
});
//# sourceMappingURL=AppIntegrationTest.js.map