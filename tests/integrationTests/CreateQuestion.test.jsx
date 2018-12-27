import "babel-polyfill";
import React from "react";
import { mount } from "enzyme";

import { CreateQuestion, mapDispatchToProps } from "../../src/components/CreateQuestion";

describe("<Content />", () => {
  const initialState = {
    title: "",
    body: "",
  };

  const editor = mount(<CreateQuestion postQuestion={jest.fn()} />);
  const preventDefault = jest.fn();
  it("should render without crashing", () => {

    expect(editor).toMatchSnapshot();
  });
  test("it triggers the postQuestion action", () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.postQuestion(initialState);
    expect(mock).toHaveBeenCalled();
  });

  it("should render a form that handles input changes", () => {
    expect(
      editor.find("[name='title']").simulate("change", {
        target: { name: "title", value: "dogs" }
      })
    );
  });

  it("should render a form that handles submits", () => {
    expect(
      editor.find("form").simulate("submit", { preventDefault })
    );
    expect(preventDefault).toBeCalled();
  });

});
