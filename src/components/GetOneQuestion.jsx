/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getOne } from "../actions/questionActions";

class GetOneQuestion extends Component {
    
  componentWillMount(){
    const { match, getOne } = this.props;
    const { id } = match.params;
    getOne(id);
  }

  questionValues = question =>{
    let values;
    question
      ? (
        values = (
          <div className="card border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">{question.question_title}</h4>
              <p className="card-text">{question.question_body}</p>
            </div>
          </div>
        )
      ) : null;
    
    return values;
  };
    
  render() {
    const { question, loading } = this.props;
    return (
      <div>
        <h2>Question</h2>
        {loading === true ? (
          <div className="text-center">
                  
            <img
              src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"
              className="loading__image"
              alt=""
            />
          </div>
        ) : 
          this.questionValues(question)
        }  
      </div>
    );
  }
}

GetOneQuestion.propTypes = {
  question: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  getOne: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  questions: state.questions.questions,
  loading: state.questions.loading,
  question: state.questions.question,
});
  
export const mapDispatchToProps = dispatch => ({
  getOne: (id) => dispatch(getOne(id))
});

export { GetOneQuestion };
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetOneQuestion);