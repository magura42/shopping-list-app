import { postUser, fetchUsers } from "../src-solution-async-calls/ajaxcalls";
import sinon from "sinon";
import expect from "must";
var user = {
    firstName: "firstName",
    lastName: "lastName"
};
describe("validateInBackend", function () {
    var requests;
    beforeEach(function () {
        requests = [];
        global.XMLHttpRequest = sinon.FakeXMLHttpRequest;
        global.XMLHttpRequest.onCreate = function (request) {
            requests.push(request);
        };
    });
    afterEach(function () {
        delete global.XMLHttpRequest;
    });
    describe("postUser", function () {
        it("submits user data to the backend", function () {
            postUser(user, function () { });
            expect(requests.length).to.eql(1);
            expect(requests[0].url).to.eql("/api/user");
            expect(requests[0].method).to.eql("POST");
        });
        it("passes the result code to the callback", function (done) {
            postUser(user, function (data) {
                expect(data).to.eql(200);
                done();
            });
            requests[0].respond(200, { "Content-Type": "application/json" }, "");
        });
    });
    describe("fetchUsers", function () {
        it("makes request to the backend", function () {
            fetchUsers(function () { });
            expect(requests.length).to.eql(1);
            expect(requests[0].url).to.eql("/api/users");
            expect(requests[0].method).to.eql("GET");
        });
        it("passes the retrieved data to the callback", function (done) {
            fetchUsers(function (data) {
                expect(data).to.eql({ somedata: true });
                done();
            });
            requests[0].respond(200, { "Content-Type": "application/json" }, "{ \"somedata\": true }");
        });
    });
});
//# sourceMappingURL=ajaxcallsTest.js.map