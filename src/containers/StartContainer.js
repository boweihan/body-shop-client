import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/userActions';
import StartComponent from '../components/private/StartComponent';

class StartContainer extends React.Component {
  render() {
    return (
      <div>
        <StartComponent
          user={this.props.userReducer}
        />
      </div>
    );
  }
}

StartContainer.propTypes = {
  userReducer: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    userReducer: state.userReducer,
  }),
  dispatch => ({
    userActions: bindActionCreators(userActions, dispatch),
  }),
)(StartContainer);
