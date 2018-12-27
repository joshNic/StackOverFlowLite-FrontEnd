import { GET_ALL, REGISTER, REGISTER_FAIL, LOGIN, LOGIN_FAIL, POST, POST_FAIL, GET_ONE, GET_ONE_FAIL, LOG_OUT }  from "../../src/actions/types";
import questionReducer from "../../src/reducers/questionReducer";

describe("questionReducer", () => {
  it("should have a default state", () => {
    expect(questionReducer(undefined, { type: "unexpected" })).toEqual({
      questions: [],
      question: {},
      loading: true,
      response: {}
    });
  });

  it("should update state on POST action type", () => {
    expect(
      questionReducer(undefined, {
        type: POST,
        payload: { question: {question:{}}}
      })
    ).toEqual({loading: false, question: {question: {question: {}}}, questions: [], response: {question: {question: {}}}});
  });

  it("should update state on POST_FAIL action type", () => {
    expect(
      questionReducer(undefined, {
        type: POST_FAIL,
        payload: { response: {response:{message:"message"}}}
      })
    ).toEqual({loading: false, question: {}, questions: [], response: {response: {response: {message: "message"}}}});
  });

  it("should update state on GET_ALL action type", () => {
    expect(
      questionReducer(undefined, {
        type: GET_ALL,
        payload: { questions: {}}
      })
    ).toEqual({loading: false, question: {}, questions: {questions: {}}, response: {}});
  });

  it("should update state on GET_ONE action type", () => {
    expect(
      questionReducer(undefined, {
        type: GET_ONE,
        payload: [{ question: {}}]
      })
    ).toEqual({loading: false, question: {question: {}}, questions: [], response: {}});
  });

  it("should update state on GET_ONE_FAIL action type", () => {
    expect(
      questionReducer(undefined, {
        type: GET_ONE_FAIL,
        payload: { message: "some message"}
      })
    ).toEqual({loading: false, question: {question_body: "Question Not Found"}, "questions": [], response: {message: "some message"}});
  });

  it("should update state on LOG_OUT action type", () => {
    expect(
      questionReducer(undefined, {
        type: LOG_OUT,
        payload: { message: "logged out"}
      })
    ).toEqual({loading: true, question: {}, questions: [], response: {message: "logged out"}});
  });

  it("should update state on LOGIN action type", () => {
    expect(
      questionReducer(undefined, {
        type: LOGIN,
        payload: { message: "token"}
      })
    ).toEqual({loading: true, question: {}, questions: [], response: {message: "token"}});
  });

  it("should update state on LOGIN_FAIL action type", () => {
    expect(
      questionReducer(undefined, {
        type: LOGIN_FAIL,
        payload: { message: "Login Error"}
      })
    ).toEqual({loading: true, question: {}, questions: [], response: {message: "Login Error"}});
  });

  it("should update state on REGISTER action type", () => {
    expect(
      questionReducer(undefined, {
        type: REGISTER,
        payload: { message: "Successfully registered"}
      })
    ).toEqual({loading: true, question: {}, questions: [], response: {message: "Successfully registered"}});
  });

  it("should update state on REGISTER_FAIL action type", () => {
    expect(
      questionReducer(undefined, {
        type: REGISTER_FAIL,
        payload: { message: "Error Not Registered"}
      })
    ).toEqual({loading: true, question: {}, questions: [], response: {message: "Error Not Registered"}});
  });



});