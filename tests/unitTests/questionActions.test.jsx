/* eslint-disable no-unused-vars */
import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import { getAll } from "../../src/actions/questionActions";

import { GET_ALL } from "../../src/actions/types";



describe("question action creators", () => {
  afterEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.restore();
  });
    
    
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {question:[{
    questions: [],
    question: {},
    loading: true,
    response: {}
  }]};
  const store = mockStore({ ...initialUserState });
   

  it("post article action on GET_ALL action type", () => {
    
    // eslint-disable-next-line no-undef
    fetchMock.get("https://stackoverflow-v2.herokuapp.com/api/v2/questions", {
      status:200,
      body:{}
    });
    const expectedActions = [{payload: {}, type: GET_ALL}];
    return store.dispatch(getAll()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});





