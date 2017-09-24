import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as landingActions from '../actions/landingActions';
import * as userActions from '../actions/userActions';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

class ToggleLandingForm extends React.Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.login = this.login.bind(this);
  }

  toggleForm() {
    this.props.landingActions.toggleLandingForm();
  }

  login() {
    this.props.userActions.login();
  }

  render() {
    const requestPending = this.props.userReducer.requestPending;
    return this.props.landingReducer.showLoginForm ?
      <Login
        toggleForm={this.toggleForm}
        login={this.login}
        requestPending={requestPending}
      /> :
      <SignUp
        toggleForm={this.toggleForm}
        login={this.login}
        requestPending={requestPending}
      />;
  }
}

ToggleLandingForm.propTypes = {
  landingReducer: PropTypes.object.isRequired,
  landingActions: PropTypes.object.isRequired,
  userReducer: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  showLoginForm: PropTypes.bool.isRequired,
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
)(ToggleLandingForm);
