import { GET_ALL }  from "../../src/actions/types";
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

});