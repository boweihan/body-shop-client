import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/userActions';
import Header from '../components/public/Header';

class HeaderContainer extends React.Component {
  login = (credentials) => {
    this.props.userActions.login(credentials);
  }

  signup = (user) => {
    this.props.userActions.signup(user);
  }

  logout = () => {
    this.props.userActions.logout();
    localStorage.removeItem('authToken'); // eslint-disable-line
    localStorage.removeItem('user'); // eslint-disable-line
  }

  render() {
    return (
      <Header
        login={this.login}
        signup={this.signup}
        logout={this.logout}
        user={this.props.userReducer}
      />
    );
  }
}

HeaderContainer.propTypes = {
  userActions: PropTypes.object.isRequired,
  userReducer: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    userReducer: state.userReducer,
  }),
  dispatch => ({
    userActions: bindActionCreators(userActions, dispatch),
  }),
)(HeaderContainer);
