/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logOut } from "../actions/questionActions";

const Header = (props) => {

  const onClick = () =>{
    props.logOut();
  };

  const token = window.localStorage.getItem("token");
  if (!token){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">StackOverFlowLite</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
          
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>

        </div>
      </nav>
    );}
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">StackOverFlowLite</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
  
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link " data-toggle="dropdown" id="dropdown01" aria-haspopup="true" aria-expanded="false" href="#">Account</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <Link className="dropdown-item" to="/create">Ask Question</Link>
              {/* <a className="dropdown-item" href="#">Dashboard</a> */}
              <button type="submit" id="logOut" className="dropdown-item" onClick={() => onClick()}>Log Out</button>
            </div>
          </li>
        </ul>
  
      </div>
    </nav>
  );
  
};

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});
export { Header };

export default connect(
  null,
  mapDispatchToProps
)(Header);
