import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ActionCreators } from '../actions';
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
    return this.props.showLandingForm ?
      <SignUp toggleForm={this.toggleForm} /> :
      <Login toggleForm={this.toggleForm} />;
  }
}

ToggleLandingForm.propTypes = {
  showLandingForm: PropTypes.bool.isRequired,
  toggleLandingForm: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    showLoginForm: state.showLoginForm,
    toggleLandingForm: state.toggleLandingForm,
  };
}

export default connect(mapDispatchToProps, mapStateToProps)(ToggleLandingForm);
