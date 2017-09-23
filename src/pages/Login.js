import React from 'react';

const HomePage = () => {
  const content = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    login: 'Login',
  };

  return (
    <main>
      <div className="row">
        <form className="col s12 middle">
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
            {content.login}
          </a>
        </form>
      </div>
    </main>
  );
};

export default HomePage;
