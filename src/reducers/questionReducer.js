import { GET_ALL, REGISTER, REGISTER_FAIL, LOGIN, LOGIN_FAIL, POST, POST_FAIL, GET_ONE, GET_ONE_FAIL, LOG_OUT } from "../actions/types";
import { alert } from "../actions/questionActions";



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
    case POST:
      alert("success", "Question Successfully Created ....Redirecting", null, null, "/questions");
      return {
        ...state,
        question: action.payload,
        response: action.payload,
        loading: false

      };
    case POST_FAIL:
      alert("error", "Error check details and try again. All fields are required", null, null, null);
      return {
        ...state,
        response: action.payload,
        loading: false
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