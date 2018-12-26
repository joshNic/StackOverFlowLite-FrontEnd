import { GET_ALL, GET_ONE, GET_ONE_FAIL, REGISTER, REGISTER_FAIL } from "../../src/actions/types";
import questionReducer from "../../src/reducers/questionReducer";

describe("questionReducer", () => {


  it("should update state on GET_ALL action type", () => {
    expect(
      questionReducer(undefined, {
        type: GET_ALL,
        payload: { questions: {} }
      })
    ).toEqual({ loading: false, question: {}, questions: { questions: {} }, response: {} });
  });
  it("should update state on GET_ONE action type", () => {
    expect(
      questionReducer(undefined, {
        type: GET_ONE,
        payload: [{ question: {} }]
      })
    ).toEqual({ loading: false, question: { question: {} }, questions: [], response: {} });
  });

  it("should update state on GET_ONE_FAIL action type", () => {
    expect(
      questionReducer(undefined, {
        type: GET_ONE_FAIL,
        payload: { message: "some message" }
      })
    ).toEqual({ loading: false, question: { question_body: "Question Not Found" }, "questions": [], response: { message: "some message" } });
  });

  it("should update state on REGISTER action type", () => {
    expect(
      questionReducer(undefined, {
        type: REGISTER,
        payload: { message: "Successfully registered" }
      })
    ).toEqual({ loading: true, question: {}, questions: [], response: { message: "Successfully registered" } });
  });

  it("should update state on REGISTER_FAIL action type", () => {
    expect(
      questionReducer(undefined, {
        type: REGISTER_FAIL,
        payload: { message: "Error Not Registered" }
      })
    ).toEqual({ loading: true, question: {}, questions: [], response: { message: "Error Not Registered" } });
  });
  it("should update state on LOGIN action type", () => {
    expect(
      questionReducer(undefined, {
        type: LOGIN,
        payload: { message: "token" }
      })
    ).toEqual({ loading: true, question: {}, questions: [], response: { message: "token" } });
  });

  it("should update state on LOGIN_FAIL action type", () => {
    expect(
      questionReducer(undefined, {
        type: LOGIN_FAIL,
        payload: { message: "Login Error" }
      })
    ).toEqual({ loading: true, question: {}, questions: [], response: { message: "Login Error" } });
  });

});