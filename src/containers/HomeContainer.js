import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as landingActions from '../redux/actions/landingActions';
import * as userActions from '../redux/actions/userActions';
import LandingMain from '../components/LandingMain';
import LandingInfo from '../components/LandingInfo';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('home');
  }

  render() {
    return (
      <div>
        <LandingMain />
        <LandingInfo />
      </div>
    );
  }
}

HomeContainer.propTypes = {

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
)(HomeContainer);
