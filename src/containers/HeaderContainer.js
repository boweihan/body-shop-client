import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as landingActions from '../redux/actions/landingActions';
import * as userActions from '../redux/actions/userActions';
import Header from '../components/Header';

class HeaderContainer extends React.Component {
  state = {

  }

  login = (credentials) => {
    debugger;
    this.props.userActions.login(credentials);
  }

  render() {
    return <Header login={this.login} />;
  }
}

HeaderContainer.propTypes = {
  userActions: PropTypes.object.isRequired,
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
