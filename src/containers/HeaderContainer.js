import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as landingActions from '../redux/actions/landingActions';
import * as userActions from '../redux/actions/userActions';
import Header from '../components/Header';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('header');
  }

  render() {
    return <Header />;
  }
}

HeaderContainer.propTypes = {

};

export default connect(
  state => ({
    landingReducer: state.landingReducer,
    userReducer: state.userReducer,
  }),
  dispatch => ({
    landingActions: bindActionCreators(landingActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  }),
)(HeaderContainer);
