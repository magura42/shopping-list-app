import React from "react";
import expect from "must";
import sinon from "sinon";
import { mount } from "enzyme";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import reducers from "../src-solution-async-calls/reducers";
import App from "../src-solution-async-calls/App";
var users = [
    { firstName: "Nicole", lastName: "Rauch" },
    { firstName: "Peter", lastName: "Müller" },
    { firstName: "Fritz", lastName: "Walter" }
];
describe("Username end2end test", function () {
    var server;
    var store;
    var component;
    beforeEach(function () {
        global.XMLHttpRequest = sinon.FakeXMLHttpRequest;
        server = sinon.fakeServer.create({ respondImmediately: true });
        store = createStore(reducers, applyMiddleware(thunkMiddleware));
    });
    afterEach(function () {
        server.restore();
    });
    it("displays all loaded users", function () {
        server.respondWith("GET", "/api/users", [200, { "Content-Type": "application/json" }, JSON.stringify(users)]);
        server.respondWith("POST", "/api/user", [200, { "Content-Type": "application/json" }, "User successfully added."]);
        // In case you need to find out which API is called, enable this:
        // this.server.respondWith(response => { console.log(response.url); response.respond(); });
        component = mount(React.createElement(Provider, { store: store },
            React.createElement(App, null)));
        // you can interact with the UI here
        expect(component.find("span").map(function (u) { return u.text(); })).to.eql(["Nicole", "Rauch", "Peter", "Müller", "Fritz", "Walter"]);
    });
});
//# sourceMappingURL=endToEndTest.js.map