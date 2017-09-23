import React from 'react';
import Navigation from './Navigation';

const Header = () =>
  (
    <nav>
      <div className="nav-wrapper brown darken-3">
        <a href="/" className="brand-logo p-header__title">
          <i className="material-icons">build</i>
          Vehicle Repair Hub
        </a>
        <Navigation />
      </div>
    </nav>
  );

export default Header;
