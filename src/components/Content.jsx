import React from "react";
import { Route } from "react-router-dom";

import GetAllQuestions from "./GetAllQuestions";
import CreateQuestion from "./CreateQuestion";
import GetOneQuestion from "./GetOneQuestion";
import Login from "./Login";
import Register from "./Register";

const Content = () => 
  (
    <div>
      <div className="jumbotron">
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/create" component={CreateQuestion} /> 
        <Route exact path="/questions" component={GetAllQuestions} />
        <Route exact path="/" component={GetAllQuestions} />
        <Route path="/question/:id" component={GetOneQuestion} />
      </div>
    </div>
  );

export default Content;

