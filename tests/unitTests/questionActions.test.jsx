/* eslint-disable no-unused-vars */
import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import { logOut, getAll, getOne, register, alert, login, postQuestion } from "../../src/actions/questionActions";

import { GET_ALL, GET_ONE, GET_ONE_FAIL, REGISTER_FAIL, POST, POST_FAIL, REGISTER, LOGIN, LOGIN_FAIL } from "../../src/actions/types";



describe("question action creators", () => {
  afterEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.restore();
  });


  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    question: [{
      questions: [],
      question: {},
      loading: true,
      response: {}
    }]
  };
  const store = mockStore({ ...initialUserState });


  it("post article action on GET_ALL action type", () => {

    // eslint-disable-next-line no-undef
    fetchMock.get("https://stackoverflow-v2.herokuapp.com/api/v2/questions", {
      status: 200,
      body: {}
    });
    const expectedActions = [{ payload: {}, type: GET_ALL }];
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
    fetchMock.get(`https://stackoverflow-v2.herokuapp.com/api/v2/question/${id}`, {
      status: 200,
      body: {}

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
    fetchMock.get(`https://stackoverflow-v2.herokuapp.com/api/v2/question/${id}`, {
      status: 404,
      body: {}

    });
    const expectedActions = [{ type: GET_ONE_FAIL, payload: {} }];
    return store.dispatch(getOne(id)).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });

});

describe("test alert", () => {
  it("tests alert success", () => {
    alert("success", null, "cedric", "random token");
  });
  it("test alert error", () => {
    alert("error", "this is an error message", null, null);

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
    const data = { question_title: "someTtitle" };
    // eslint-disable-next-line no-undef
    fetchMock.post("https://stackoverflow-v2.herokuapp.com/api/v2/auth/signup", {
      status: 201,
      headers: {
        "content-type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(data)

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
  const initialUserState = {
    question: [{
      questions: [],
      question: {},
      loading: true,
      response: {}
    }]
  };
  const store = mockStore({ ...initialUserState });

  it("post article action on REGISTER_FAIL action type", () => {
    const data = { questions: { question_title: "someTtitle" } };
    // eslint-disable-next-line no-undef
    fetchMock.post("https://stackoverflow-v2.herokuapp.com/api/v2/auth/signup", data);
    const expectedActions = [{ type: REGISTER_FAIL, payload: data }];
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
  const initialUserState = {
    question: [{
      questions: [],
      question: {},
      loading: true,
      response: {}
    }]
  };
  const store = mockStore({ ...initialUserState });

  it("post article action on LOGIN_FAIL action type", () => {
    const registerData = { email: "test@test.com", password: "testPassword" };
    fetchMock.get("https://stackoverflow-v2.herokuapp.com/api/v2/auth/login", {
      status: 400,
      headers: {
        "Authorization": `Basic ${window.btoa(`${registerData.email}:${registerData.password}`)}`
      }
    });
    const expectedActions = [{ type: LOGIN_FAIL, payload: registerData }];
    return store.dispatch(login(registerData)).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });

  it("post article action on LOG_OUT action type", () => {

    // eslint-disable-next-line no-undef
    store.dispatch(logOut());
    return undefined;


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

  it("post question action on POST action type", () => {
    localStorage.setItem("token", "token");
    const data = {};
    // eslint-disable-next-line no-undef
    fetchMock.post("https://stackoverflow-v2.herokuapp.com/api/v2/question", {
      status: 201,
      headers: {
        "content-type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(data),

    });
    const expectedActions = [{ type: POST, payload: { message: "someMessage" } }];
    return store.dispatch(postQuestion(data)).then(() => {
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
  it("post article action on POST_FAIL action type", () => {
    const data = { question_title: "someTtitle" };
    localStorage.setItem("token", "token");
    // eslint-disable-next-line no-undef
    fetchMock.post("https://stackoverflow-v2.herokuapp.com/api/v2/question", {
      headers: {
        "content-type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(data)

    });
    const expectedActions = [{ type: POST_FAIL, payload: "someMessage" }];
    return store.dispatch(postQuestion(data)).then(() => {
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
    question: [{
      questions: [],
      question: {},
      loading: true,
      response: {}
    }]
  };
  const store = mockStore({ ...initialUserState });

  it("post article action on LOGIN action type", () => {
    const registerData = { email: "test@test.com", password: "testPassword" };
    fetchMock.get("https://stackoverflow-v2.herokuapp.com/api/v2/auth/login", {
      status: 200,
      headers: {
        "Authorization": `Basic ${window.btoa(`${registerData.email}:${registerData.password}`)}`
      }
    });
    const expectedActions = [{ type: LOGIN, payload: registerData }];
    return store.dispatch(login(registerData)).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});




