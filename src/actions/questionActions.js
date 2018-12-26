/* eslint-disable no-unused-expressions */
import { GET_ALL } from "./types";

export const getAll = () => dispatch => 
  fetch("https://stackoverflow-v2.herokuapp.com/api/v2/questions")
    .then(res => res.json())
    .then(questions =>
      dispatch({
        type: GET_ALL,
        payload: questions
      })
    );
