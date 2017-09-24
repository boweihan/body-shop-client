import * as types from '../constants/ActionTypes';

const userState = {
  userObject: {},
  authenticationToken: null,
  requestPending: false,
};

const userReducer = (state = userState, action, userObject) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return Object.assign({}, state, userObject);
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        userObject,
        requestPending: false,
      });
    case types.LOGIN_SHOW_LOADING:
      return Object.assign({}, state, {
        requestPending: true,
      });
    default:
      return state;
  }
};

export default userReducer;
