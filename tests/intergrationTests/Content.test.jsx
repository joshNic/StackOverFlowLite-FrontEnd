import "babel-polyfill";
import React from "react";
import {shallow } from "enzyme";

import  Content  from "../../src/components/Content";

describe("<Content />", () => {
 
  it("should render without crashing", () => {
    const editor = shallow(<Content />);
    expect(editor).toMatchSnapshot();
  });
});
