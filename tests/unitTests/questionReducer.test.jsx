import { GET_ALL, GET_ONE, GET_ONE_FAIL }  from "../../src/actions/types";
import questionReducer from "../../src/reducers/questionReducer";

describe("questionReducer", () => {
  

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

});