/* eslint-disable no-unused-expressions */
import { GET_ALL, GET_ONE, GET_ONE_FAIL } from "./types";

export const getAll = () => dispatch => 
  fetch("https://stackoverflow-v2.herokuapp.com/api/v2/questions")
    .then(res => res.json())
    .then(questions =>
      dispatch({
        type: GET_ALL,
        payload: questions
      })
    );

export const getOne = (id) => dispatch => 
fetch(`https://stackoverflow-v2.herokuapp.com/api/v2/question/${id}`, {
    method: "GET",
    headers: {
    "Accept": "application/json, text/plain, */*",
    "Content-type": "application/json"
    }
})
    .then((res) => {
    let result;
    if(res.status === 200){
        result = res.json();
        result.then(response =>{
        dispatch({ type: GET_ONE, payload: response });});
    }
    else {
        result = res.text();
        result.then(response=>{
        dispatch({ type: GET_ONE_FAIL, payload: response});
        });
    }});
  