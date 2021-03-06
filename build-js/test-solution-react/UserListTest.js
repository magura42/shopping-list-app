import React from "react";
import expect from "must";
import { shallow } from "enzyme";
import User from "../src-solution-react/User";
import UserList from "../src-solution-react/UserList";
describe('UserList', function () {
    it('displays the name that is passed to it', function () {
        var users = shallow(React.createElement(UserList, { users: [
                { firstName: "Petra", lastName: "Meier" },
                { firstName: "Peter", lastName: "Miller" }
            ] }));
        var elems = users.find("li");
        expect(elems.length).to.eql(2);
        expect(elems.at(0).key()).to.eql("userlist_PetraMeier");
        expect(elems.at(1).key()).to.eql("userlist_PeterMiller");
        expect(users.children().at(0).key()).to.eql("userlist_PetraMeier");
        expect(users.childAt(0).key()).to.eql("userlist_PetraMeier");
        var userComps = users.find(User);
        expect(userComps.length).to.eql(2);
        expect(userComps.at(0).key()).to.be.null();
        expect(userComps.at(0).props())
            .to.eql({ firstName: "Petra", lastName: "Meier" });
        expect(userComps.at(1).props())
            .to.eql({ firstName: "Peter", lastName: "Miller" });
        expect(userComps.at(0).prop("firstName")).to.eql("Petra");
    });
});
//# sourceMappingURL=UserListTest.js.map