import "babel-polyfill";
import React from "react";
import { shallow } from "enzyme";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";


import { GetOneQuestion, mapDispatchToProps } from "../../src/components/GetOneQuestion";

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
 
  const editor = shallow(<GetOneQuestion loading={false} questions={[initialState]} getOne={jest.fn()} store={store} match={{ params: { id: 2 } }} />);
  
  it("should render without crashing", () => {
    
    expect(editor).toMatchSnapshot();
  });

  test("it triggers the postQuestion action", () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.getOne(2);
    expect(mock).toHaveBeenCalled();
  });
});
