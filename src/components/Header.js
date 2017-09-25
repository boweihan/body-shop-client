import React from 'react';
import { Link } from 'react-router';

const Header = () =>
  (
    <nav className="nav-extended">
      <div className="nav-wrapper brown darken-3">
        <a href="/" className="brand-logo p-header__title">
          <i className="material-icons">build</i>
          Unscratch
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="job">Post a Job</Link></li>
          <li><Link to="estimate">Give an Estimate</Link></li>
        </ul>
      </div>
    </nav>
  );

export default Header;
