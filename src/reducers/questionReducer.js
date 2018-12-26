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
    case REGISTER:
      alert("success", "Successfully Registered ....Redirecting", null, null, "/login");
      return {
        ...state,
        response: action.payload,

      };
    case REGISTER_FAIL:
      alert("error", action.payload.error, null, null, null);
      return {
        ...state,
        response: action.payload,
      };
    case GET_ONE_FAIL:
      return {
        ...state,
        response: action.payload,
        question: { question_body: "Question Not Found" },
        loading: false
      };
    case LOGIN:
      alert("success", "Successfully Loggedin ....Redirecting", null, null, "/questions");
      return {
        ...state,
        // question: action.payload,
        response: action.payload,

      };
    case LOGIN_FAIL:
      alert("error", `${action.payload} Please create an account`, null, null, null);
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
}