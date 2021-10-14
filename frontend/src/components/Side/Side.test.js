import React from "react";
import { shallow } from "enzyme";
import Side from "./Side";

describe("Side", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Side />);
    expect(wrapper).toMatchSnapshot();
  });
});
