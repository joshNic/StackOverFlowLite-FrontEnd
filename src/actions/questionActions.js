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

export const register = (registerData) => dispatch => 
fetch("https://stackoverflow-v2.herokuapp.com/api/v2/auth/signup", {
    method: "POST",
    headers: {
    "Accept": "application/json, text/plain, */*",
    "Content-type": "application/json"
    },
    body: JSON.stringify(registerData)
})
    .then(res => {
    const resp = res.json();
    if (res.status === 201) {
        resp.then(reponse =>
        dispatch({ type: REGISTER, payload: reponse }));
    } else {
        resp.then(reponse =>
        dispatch({ type: REGISTER_FAIL, payload: reponse }));
    }
    });

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
  