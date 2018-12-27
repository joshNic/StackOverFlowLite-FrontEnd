import "babel-polyfill";
import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { Header, mapDispatchToProps } from "../../src/commons/Header";

describe("<Content />", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    questions: [],
    question: {},
    loading: true,
    response: {}
  };

  const store = mockStore({ ...initialUserState });
  const editor = shallow(<Header store={store} logOut={jest.fn()} />);

  it("should render without crashing", () => {
    expect(editor).toMatchSnapshot();
  });

  test("it does not trigger the logOut action with no token", () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.logOut();
    expect(mock).toHaveBeenCalled();
  });

  test("it does  trigger the logOut action with token provided", () => {
    localStorage.setItem("token", "someToken");
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.logOut();
    expect(mock).toHaveBeenCalled();
  });

  it("should render a button that handles click actions", () => {
    const editorr = shallow(<Header store={store} logOut={jest.fn()} />);
    expect(
      editorr.find("button#logOut").simulate("click")
    );
  });
});


