import { GET_ALL, GET_ONE, GET_ONE_FAIL } from "../actions/types";



const initialState = {
  questions: [],
  question: {},
  loading: true,
  response: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
    case GET_ONE:
      return {
        ...state,
        question: action.payload[0],
        loading: false

      };
    case GET_ONE_FAIL:
      return {
        ...state,
        response: action.payload,
        question: { question_body: "Question Not Found" },
        loading: false
      };
    default:
      return state;
  }
}