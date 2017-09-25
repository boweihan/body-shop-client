import * as types from '../constants/ActionTypes';

const userState = {
  currentUser: null,
  requestPending: false,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return Object.assign({}, state);
    case types.USER_LOGOUT:
      return Object.assign({}, state);
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        currentUser: action.currentUser,
        requestPending: false,
      });
    case types.LOGIN_FAILED:
      return Object.assign({}, state, {
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
