/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { login } from "../actions/questionActions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { login } = this.props;
    const data = {
      email: email,
      password: password
    };
    login(data);
  }
  
  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Login</h1>
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
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data))
});
export { Login };

export default connect(
  null,
  mapDispatchToProps
)(Login);
