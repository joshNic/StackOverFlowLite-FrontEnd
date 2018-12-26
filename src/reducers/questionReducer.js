import { GET_ALL } from "../actions/types";



const initialState = {
  questions: [],
  question: {},
  loading:true,
  response:{}
};

export default function (state = initialState, action) {
  switch (action.type) {
  case GET_ALL:
    return {
      ...state,
      questions: action.payload,
      loading:false
    };
  default:
    return state;
  }
}