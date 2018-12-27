/* eslint-disable no-unused-expressions */
import toastr from "toastr";

import { GET_ALL, LOGIN, LOGIN_FAIL, REGISTER, GET_ONE, GET_ONE_FAIL, POST, REGISTER_FAIL, POST_FAIL } from "./types";

export const alert=(type,errorMsg,username, token, url)=>{
  if(type === "error" || "success"  && !username && !token){
    type === "success" ? toastr.success(errorMsg) && setTimeout(() => window.location.replace(url), 3000): toastr.error(errorMsg);
  }
  else if(type==="success" && !errorMsg){
    toastr.success(`Logging in as ${username}!`);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    setTimeout(() => window.location.replace(url), 3000);
  };

};

export const postQuestion = (questionData) => dispatch => 
  fetch("https://stackoverflow-v2.herokuapp.com/api/v2/question", {
    method: "POST",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-type": "application/json",
      "x-access-token": localStorage.getItem("token")
    },
    body: JSON.stringify(questionData)
  })
    .then((res) => {
      let result;
      if(res.status === 201){
        result = res.json();
        result.then(response =>{
          dispatch({ type: POST, payload: response.message });});
      }
      else {
        result = res.text();
        result.then(response=>{
          dispatch({ type: POST_FAIL, payload: response});
        });
      }});

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

export const login = (registerData) => dispatch => {
  return fetch("https://stackoverflow-v2.herokuapp.com/api/v2/auth/login", {
    method: "GET",
    headers: {
      "Authorization": `Basic ${window.btoa(`${registerData.email}:${registerData.password}`)}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
  })
    .then((res) => {
      let result;
      if (res.status === 200) {
        result = res.json();
        result.then(response => {
          localStorage.setItem("token", response.token);
          dispatch({ type: LOGIN, payload: response.token });
        });
      }
      else {
        result = res.text();
        result.then(response => {
          dispatch({ type: LOGIN_FAIL, payload: response });
        });
      }
    });
};

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
      if (res.status === 200) {
        result = res.json();
        result.then(response => {
          dispatch({ type: GET_ONE, payload: response });
        });
      }
      else {
        result = res.text();
        result.then(response => {
          dispatch({ type: GET_ONE_FAIL, payload: response });
        });
      }
    });
