import "babel-polyfill";
import React from "react";
import {mount } from "enzyme";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import  { Register, mapDispatchToProps}   from "../../src/components/Register";
import  ConnectedRegister   from "../../src/components/Register";

describe("<Content />", () => {

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    questions:[],
    question:{},
    loading:true,
    response:{}   
  };

  const store = mockStore({ ...initialUserState });
  const initialState = {
    title: "",
    body: "",
  };
 
  const editor = mount(<Register register={jest.fn()} />);
  const coneditor = mount(<ConnectedRegister register={jest.fn()} store={store} />);
  const preventDefault = jest.fn();
  it("should render without crashing", () => {
    
    expect(editor).toMatchSnapshot();
  });
  test("it triggers the postQuestion action", () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.register(initialState);
    expect(mock).toHaveBeenCalled();
  });
 
  it("should render a form that handles input changes", () => {
    expect(
      coneditor.find("[name='email']").simulate("change", {
        target: { name: "email", value: "test@gmail.com" }
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
