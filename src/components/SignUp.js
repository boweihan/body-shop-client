import React from 'react';
import PropTypes from 'prop-types';

const SignUp = (props) => {
  const content = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    signUp: 'Sign Up',
    toggleMessage: 'Existing User? Login.',
  };

  return (
    <div className="row">
      <div className="col s1" />
      <form className="col s4 middle c-landing__form">
        <div className="row">
          <div className="input-field col s6">
            <input
              onChange={props.handleChange}
              value={props.state.firstName}
              id="firstName"
              type="text"
              className="validate"
            />
            <label htmlFor="firstName">{content.firstName}</label>
          </div>
          <div className="input-field col s6">
            <input
              onChange={props.handleChange}
              value={props.state.lastName}
              id="lastName"
              type="text"
              className="validate"
            />
            <label htmlFor="lastName">{content.lastName}</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={props.handleChange}
              value={props.state.email}
              id="email"
              type="email"
              className="validate"
            />
            <label htmlFor="email">
              {content.email}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={props.handleChange}
              value={props.state.password}
              id="password"
              type="password"
              className="validate"
            />
            <label htmlFor="password">
              {content.password}
            </label>
          </div>
        </div>
        <a onClick={props.signUp} role="link" tabIndex="-1" className="waves-effect waves-light btn c-button brown">
          <i className="material-icons right">cloud</i>
          {props.requestPending ?
            <div className="c-spinner" /> :
            content.signUp
          }
        </a>
        <a role="link" tabIndex="-1" onClick={props.toggleForm} className="c-login__link">{content.toggleMessage}</a>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  requestPending: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  state: PropTypes.object,
};

export default SignUp;
