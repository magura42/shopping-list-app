import React from "react";
import expect from "must";
import { shallow } from "enzyme";
import HelloWorld from "../src/componets/HelloWorld";
describe("HelloWorld", function () {
    it('checks the result type and contents', function () {
        var result = shallow(React.createElement(HelloWorld, null));
        expect(result.type()).to.equal("p");
        expect(result.text()).to.equal("hello world");
    });
});
//# sourceMappingURL=HelloWorld.test.js.map