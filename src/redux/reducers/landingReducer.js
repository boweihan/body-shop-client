import * as types from '../ActionTypes';

const loginState = {
  showLoginForm: true,
};

const landingReducer = (state = loginState, action) => {
  switch (action.type) {
    case types.TOGGLE_LANDING_FORM:
      return Object.assign({}, state, {
        showLoginForm: !state.showLoginForm,
      });
    default:
      return state;
  }
};

export default landingReducer;
