import React from "react";
import expect from "must";
import { shallow } from "enzyme";
import User from "../src-solution-react/UserWithHighlight";
describe('UserWithHighlight', function () {
    var user;
    beforeEach(function () {
        user = shallow(React.createElement(User, { firstName: "Paul", lastName: "Meier" }));
    });
    describe('state leads to correct highlighting', function () {
        it('does not highlight the user name when the highlighted state is set to false', function () {
            user.setState({ highlighted: false });
            var highlighted = user.find({ style: { backgroundColor: "#FF0000" } });
            var unhighlighted = user.find({ style: { backgroundColor: "#FFFFFF" } });
            expect(highlighted.length).to.eql(0);
            expect(unhighlighted.length).to.eql(1);
            expect(unhighlighted.text()).to.eql("Paul");
        });
        it('highlights the user name when the highlighted state is set to true', function () {
            user.setState({ highlighted: true });
            var highlighted = user.find({ style: { backgroundColor: "#FF0000" } });
            var unhighlighted = user.find({ style: { backgroundColor: "#FFFFFF" } });
            expect(highlighted.length).to.eql(1);
            expect(highlighted.text()).to.eql("Paul");
            expect(unhighlighted.length).to.eql(0);
        });
    });
    describe('clicking adjusts the state', function () {
        it('the highlight state is initially false', function () {
            expect(user.state("highlighted")).to.be.false();
        });
        it('changes highlight state to true after click', function () {
            user.setState({ highlighted: false });
            user.simulate("click");
            expect(user.state("highlighted")).to.be.true();
        });
        it('changes highlight state to false after click', function () {
            user.setState({ highlighted: true });
            user.simulate("click");
            expect(user.state("highlighted")).to.be.false();
        });
    });
});
//# sourceMappingURL=UserWithHighlightTest.js.map