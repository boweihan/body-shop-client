import * as types from '../ActionTypes';

/**
 * Design decision: Current user is either false or truthy (user object)
 * Eventually split this into better login states
 * Create user state from localStorage on instantiation if it exists
 */
const userState = {
  // null or user
  currentUser: localStorage.getItem('user'), // eslint-disable-line
  requestPending: false,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case types.LOGOUT:
      return {
        currentUser: null,
        requestPending: false,
      };
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