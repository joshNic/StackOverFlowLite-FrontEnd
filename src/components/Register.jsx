/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { register } from "../actions/questionActions";

class Register extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { register } = this.props;
    const data = {
      user_email: email,
      user_password: password
    };
    register(data);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1> Create Account</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label
              className="col-form-label col-form-label-lg"
              htmlFor="inputEmail"
            >
              Email
            </label>
            <input
              className="form-control form-control-lg"
              type="email"
              placeholder="Enter Email"
              id="inputEmail"
              name="email"
              onChange={this.onChange}
              value={email}
            />
            <label
              className="col-form-label col-form-label-lg"
              htmlFor="inputPassword"
            >
              Password
            </label>
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="Enter password"
              id="inputPassword"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  question: state
});

export const mapDispatchToProps = dispatch => ({
  register: data => dispatch(register(data))
});

export { Register };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
