import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as landingActions from '../redux/actions/landingActions';
import * as userActions from '../redux/actions/userActions';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: null,
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.getAttribute('id')]: evt.target.value });
  }

  toggleForm() {
    this.props.landingActions.toggleLandingForm();
  }

  login() {
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.userActions.login(credentials);
  }

  signUp() {
    const user = {
      name: `${this.state.firstName} ${this.state.lastName}`,
      email: this.state.email,
      password: this.state.password,
      enabled: true,
    };
    this.props.userActions.signUp(user);
  }

  render() {
    const requestPending = this.props.userReducer.requestPending;
    const currentUser = this.props.userReducer.currentUser;
    if (currentUser) {
      // DO SOMETHING...
      return <div>bop</div>;
    }
    return this.props.landingReducer.showLoginForm ?
      <Login {...this} requestPending={requestPending} /> :
      <SignUp {...this} requestPending={requestPending} />;
  }
}

HeaderContainer.propTypes = {
  landingReducer: PropTypes.object.isRequired,
  landingActions: PropTypes.object.isRequired,
  userReducer: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  showLoginForm: PropTypes.bool,
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
