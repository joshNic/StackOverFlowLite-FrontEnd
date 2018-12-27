/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-shadow */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { postQuestion } from "../actions/questionActions";

class CreateQuestion extends Component {
  state = {
    title: "",
    body: ""
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    const { postQuestion } = this.props;
    const data = {
      question_title: title,
      question_body: body
    };
    postQuestion(data);
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Create Question</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label
              className="col-form-label col-form-label-lg"
              htmlFor="inputTitle"
            >
              Question Title
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Enter Question Title"
              id="inputTitle"
              name="title"
              onChange={this.onChange}
              value={title}
            />

            <label
              className="col-form-label col-form-label-lg"
              htmlFor="inputBody"
            >
              Question Description
            </label>
            <textarea
              className="form-control form-control-lg"
              rows="15"
              type="password"
              placeholder="Enter Question Description"
              id="inputBody"
              name="body"
              onChange={this.onChange}
              value={body}
            />

          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Create Question
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CreateQuestion.propTypes = {
  postQuestion: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  question: state.questions.question
});

export const mapDispatchToProps = dispatch => ({
  postQuestion: data => dispatch(postQuestion(data))
});
export { CreateQuestion };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateQuestion);
