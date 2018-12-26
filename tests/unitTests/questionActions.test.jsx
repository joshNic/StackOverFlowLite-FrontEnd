/* eslint-disable no-unused-vars */
import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import { getAll, getOne, register } from "../../src/actions/questionActions";

import { GET_ALL, GET_ONE, GET_ONE_FAIL, REGISTER_FAIL, REGISTER } from "../../src/actions/types";



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

describe("question action creators", () => {
    afterEach(() => {
      // eslint-disable-next-line no-undef
      fetchMock.restore();
    });
      
      
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialUserState = {
      questions: [],
      question: {},
      loading: true,
      response: {}
    };
    const store = mockStore({ ...initialUserState });
     
    it("post article action on GET_ONE action type", () => {
      const id = 2;
      // eslint-disable-next-line no-undef
      fetchMock.get(`https://stackoverflow-v2.herokuapp.com/api/v2/question/${id}`,{
        status:200,
        body:{}
    
      });
      const expectedActions = [{ type: GET_ONE, payload: {} }];
      return store.dispatch(getOne(id)).then(() => {
        expect(store.getActions()).toEqual([]);
      });
    });
    
  });
  
  describe("question action creators", () => {
    afterEach(() => {
      // eslint-disable-next-line no-undef
      fetchMock.restore();
    });
        
        
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialUserState = {
      questions: [],
      question: {},
      loading: true,
      response: {}
    };
    const store = mockStore({ ...initialUserState });
       
    it("post article action on GET_ONE_FAIL action type", () => {
      const id = 2;
      // eslint-disable-next-line no-undef
      fetchMock.get(`https://stackoverflow-v2.herokuapp.com/api/v2/question/${id}`,{
        status:404,
        body:{}
      
      });
      const expectedActions = [{ type: GET_ONE_FAIL, payload: {} }];
      return store.dispatch(getOne(id)).then(() => {
        expect(store.getActions()).toEqual([]);
      });
    });
      
  });

  describe("question action creators", () => {
    afterEach(() => {
      // eslint-disable-next-line no-undef
      fetchMock.restore();
    });
      
      
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialUserState = {
      questions: [],
      question: {},
      loading: true,
      response: {}
    };
    const store = mockStore({ ...initialUserState });
     
    it("post article action on REGISTER action type", () => {
      const data = {question_title:"someTtitle"};
      // eslint-disable-next-line no-undef
      fetchMock.post("https://stackoverflow-v2.herokuapp.com/api/v2/auth/signup",{
        status:201,
        headers: {
          "content-type": "application/json",
          "Authorization": localStorage.getItem("token")
        },
        body:JSON.stringify(data)
    
      });
      const expectedActions = [{ type: REGISTER, payload: data }];
      return store.dispatch(register(data)).then(() => {
        expect(store.getActions()).toEqual([]);
      });
    });
  });
  
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
     
    it("post article action on REGISTER_FAIL action type", () => {
      const data = {questions:{question_title:"someTtitle"}};
      // eslint-disable-next-line no-undef
      fetchMock.post("https://stackoverflow-v2.herokuapp.com/api/v2/auth/signup", data);
      const expectedActions = [{ type: REGISTER_FAIL, payload: data }];
      return store.dispatch(register(data)).then(() => {
        expect(store.getActions()).toEqual([]);
      });
    });
  });
  





