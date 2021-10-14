import React from "react";
import { shallow } from "enzyme";
import Back from "./Back";

describe("Back", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Back />);
    expect(wrapper).toMatchSnapshot();
  });
});
