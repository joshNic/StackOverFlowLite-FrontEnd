/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAll } from "../actions/questionActions";

class GetAllQuestions extends Component {
    
  componentWillMount(){
    const { getAll } = this.props;
    getAll();
  }

  questionValues = questions =>{
    let values;
    questions
      ? (
        values = questions.map(question => (
          <div key={question.question_id}>
            <div className="card border-primary mb-3">
              <div className="card-body">
                <Link to={{pathname: `/question/${question.question_id}`}}>
                  <h4 className="card-title">{question.question_title}</h4>
                </Link>
                <p className="card-text">{question.question_body}</p>
              </div>
            </div>
          </div>
        ))
      ) : null;
    
    return values;
  };
  
  render() {
    
    const { questions, loading } = this.props;
    return (
      <div>
        <h2>Questions</h2>
        {loading === true ? (
          <div className="text-center">
            <img
              src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"
              className="loading__image"
              alt=""
            />
          </div>
        ) : 
          this.questionValues(questions)
        }  
      </div>
    );
  }
}

GetAllQuestions.propTypes = {
  questions: PropTypes.array.isRequired,
  getAll: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  questions: state.questions.questions,
  loading: state.questions.loading
});

export const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getAll())
});
  
export { GetAllQuestions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAllQuestions);
