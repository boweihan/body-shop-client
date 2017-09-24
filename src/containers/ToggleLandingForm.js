import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleLandingForm } from '../actions/landingActions';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

class ToggleLandingForm extends React.Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.props.toggleLandingForm();
  }

  render() {
    return this.props.landingReducer.showLoginForm ?
      <Login toggleForm={this.toggleForm} /> :
      <SignUp toggleForm={this.toggleForm} />;
  }
}

ToggleLandingForm.propTypes = {
  landingReducer: PropTypes.object.isRequired,
  showLoginForm: PropTypes.bool.isRequired,
  toggleLandingForm: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    landingReducer: state.landingReducer,
  }),
  dispatch => ({
    toggleLandingForm: () => {
      dispatch(toggleLandingForm(true));
    },
  }),
)(ToggleLandingForm);
