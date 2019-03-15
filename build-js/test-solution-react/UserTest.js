import React from "react";
import expect from "must";
import { shallow } from "enzyme";
import User from "../src-solution-react/User";
describe('User', function () {
    it('displays the name that is passed to it', function () {
        var user = shallow(React.createElement(User, { firstName: "Petra", lastName: "Meier" }));
        var nameParts = user.find("span");
        expect(nameParts.length).to.eql(2);
        expect(nameParts.at(0).text()).to.eql("Petra");
        expect(nameParts.at(1).text()).to.eql("Meier");
        expect(nameParts.map(function (c) { return c.text(); }))
            .to.eql(["Petra", "Meier"]);
    });
});
//# sourceMappingURL=UserTest.js.map