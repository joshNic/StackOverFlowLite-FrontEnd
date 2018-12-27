import "babel-polyfill";
import React from "react";
import { shallow } from "enzyme";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";


import { GetAllQuestions, mapDispatchToProps } from "../../src/components/GetAllQuestions";

describe("<GetAllQuestions />", () => {

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
 
  const editor = shallow(<GetAllQuestions loading={false} questions={[initialState]} getAll={jest.fn()} store={store} />);
  
  it("should render without crashing", () => {
    
    expect(editor).toMatchSnapshot();
  });

  test("it triggers the getOne action", () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.getAll();
    expect(mock).toHaveBeenCalled();
  });
});
