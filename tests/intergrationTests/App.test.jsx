import "babel-polyfill";
import React from "react";
import {shallow } from "enzyme";

import  App  from "../../src/components/App";

describe("<App />", () => {
 
  it("should render without crashing", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
