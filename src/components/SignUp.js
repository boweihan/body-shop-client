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
            <input id="first_name" type="text" className="validate" />
            <label htmlFor="first_name">{content.firstName}</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">{content.lastName}</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">{content.email}</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">{content.password}</label>
          </div>
        </div>
        <a className="waves-effect waves-light btn c-button brown">
          <i className="material-icons right">cloud</i>
          {content.signUp}
        </a>
        <a role="link" tabIndex="-1" onClick={props.toggleForm} className="c-login__link">{content.toggleMessage}</a>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default SignUp;
