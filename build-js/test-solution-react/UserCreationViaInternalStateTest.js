import React from "react";
import expect from "must";
import sinon from "sinon";
import { shallow } from "enzyme";
import UserCreation from "../src-solution-react/UserCreationViaInternalState";
describe('UserCreation', function () {
    var submit;
    var user;
    beforeEach(function () {
        submit = sinon.spy();
        user = shallow(React.createElement(UserCreation, { submitUser: submit }));
    });
    it("saves the firstname to the internal state", function () {
        var input = user.find("input").at(0);
        input.simulate("blur", { target: { value: "Paul" } });
        expect(user.state("firstName")).to.eql("Paul");
    });
    it("saves the lastname to the internal state", function () {
        var input = user.find("input").at(1);
        input.simulate("blur", { target: { value: "Meier" } });
        expect(user.state("lastName")).to.eql("Meier");
    });
    it("invokes the callback handler", function () {
        user.setState({ firstName: "Paul", lastName: "Meier" });
        var button = user.find("button"); // .first();
        button.simulate("click");
        expect(submit.called).to.be.true();
        expect(submit.calledOnce).to.be.true();
        expect(submit.getCall(0).args).to.eql([{ firstName: "Paul", lastName: "Meier" }]); // array!
    });
    it("blackbox test", function () {
        var inputs = user.find("input");
        inputs.at(0).simulate("blur", { target: { value: "Paul" } });
        inputs.at(1).simulate("blur", { target: { value: "Meier" } });
        var button = user.find("button"); // .first();
        button.simulate("click");
        expect(submit.getCall(0).args)
            .to.eql([{ firstName: "Paul", lastName: "Meier" }]);
    });
});
//# sourceMappingURL=UserCreationViaInternalStateTest.js.map