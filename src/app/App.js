import React from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from '../containers/HeaderContainer';

const App = ({ children }) =>
  (
    <div>
      <HeaderContainer />
      {children}
    </div>
  );

App.propTypes = {
  children: PropTypes.object,
};


export default App;
