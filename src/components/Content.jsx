import React from "react";
import { Route } from "react-router-dom";

import GetAllQuestions from "./GetAllQuestions";
import GetOneQuestion from "./GetOneQuestion";

const Content = () => 
  (
    <div>
      <div className="jumbotron">
        <Route exact path="/questions" component={GetAllQuestions} />
        <Route exact path="/" component={GetAllQuestions} />
        <Route path="/question/:id" component={GetOneQuestion} />
      </div>
    </div>
  );

export default Content;
