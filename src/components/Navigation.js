import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const Navigation = ({ buttonClassName }) =>
  (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link className={{ buttonClassName }} to="/">Home</Link></li>
      <li><Link className={{ buttonClassName }} to="job">Post a Job</Link></li>
      <li><Link className={{ buttonClassName }} to="estimate">Give an Estimate</Link></li>
    </ul>
  );

Navigation.propTypes = {
  buttonClassName: PropTypes.string.isRequired,
};

Navigation.defaultProps = {
  className: 'right hide-on-med-and-down',
  buttonClassName: '',
};

export default Navigation;
