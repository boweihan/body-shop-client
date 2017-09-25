import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  const content = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    login: 'Login',
    toggleMessage: 'New User? Sign Up.',
  };

  return (
    <div className="row">
      <div className="col s1" />
      <form className="col s4 middle c-landing__form">
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={props.handleChange}
              value={props.state.email ? props.state.email : ''}
              id="email"
              type="email"
              className="validate"
            />
            <label htmlFor="email">{content.email}</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={props.handleChange}
              value={props.state.password ? props.state.password : ''}
              id="password"
              type="password"
              className="validate"
            />
            <label htmlFor="password">{content.password}</label>
          </div>
        </div>
        <a onClick={props.login} role="link" tabIndex="-1" className="waves-effect waves-light btn c-button brown">
          <i className="material-icons right">cloud</i>
          {props.requestPending ?
            <div className="c-spinner" /> :
            content.login
          }
        </a>
        <a role="link" tabIndex="-1" onClick={props.toggleForm} className="c-login__link">{content.toggleMessage}</a>
      </form>
    </div>
  );
};

Login.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  requestPending: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.object,
};

export default Login;
