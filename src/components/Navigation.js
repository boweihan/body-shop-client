import React from 'react';
import { Link } from 'react-router';

const Navigation = ({ buttonClassName }) =>
  (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link className={{ buttonClassName }} to="/">Home</Link></li>
      <li><Link className={{ buttonClassName }} to="job">Post a Job</Link></li>
      <li><Link className={{ buttonClassName }} to="estimate">Quote a Job</Link></li>
      <li><Link className={{ buttonClassName }} to="signup">Sign Up</Link></li>
      <li><Link className={{ buttonClassName }} to="login">Login</Link></li>
    </ul>
  );

Navigation.defaultProps = {
  className: 'right hide-on-med-and-down',
  buttonClassName: '',
};

export default Navigation;