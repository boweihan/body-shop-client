import React from 'react';
import PropTypes from 'prop-types';
import PrivateHeaderContainer from '../containers/PrivateHeaderContainer';

const PrivateApp = ({ children }) =>
  (
    <div>
      <PrivateHeaderContainer />
      {children}
    </div>
  );

PrivateApp.propTypes = {
  children: PropTypes.object,
};

export default PrivateApp;
