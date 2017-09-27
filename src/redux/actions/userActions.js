import * as types from '../ActionTypes';
import Api from '../../services/http';
import * as constants from '../../constants/constants';

const URLS = {
  getUser: `${constants.BASE_SERVER_URL}/api/users/login`,
  createUser: `${constants.BASE_SERVER_URL}/api/users/signup`,
};

export const loginLoading = () => ({
  type: types.LOGIN_SHOW_LOADING,
});

export const loginFailed = () => ({
  type: types.LOGIN_FAILED,
});

export const loginSuccess = currentUser => ({
  type: types.LOGIN_SUCCESS,
  currentUser,
});

export const logout = () => ({
  type: types.LOGOUT,
});

const setUserAndAuth = (credentials, currentUser) => {
  const authToken = btoa(`${credentials.email}:${credentials.password}`); // eslint-disable-line
  localStorage.setItem('authToken', authToken); // eslint-disable-line
  localStorage.setItem('user', currentUser); // eslint-disable-line
};

export const login = credentials => async (dispatch) => {
  dispatch(loginLoading());
  try {
    const currentUser = await Api.post(
      URLS.getUser,
      { email: credentials.email },
    );
    setUserAndAuth(credentials, currentUser);
    dispatch(loginSuccess(currentUser));
  } catch (e) {
    dispatch(loginFailed(e));
  }
};

export const signup = user => async (dispatch) => {
  dispatch(loginLoading());
  try {
    const currentUser = await Api.post(
      URLS.createUser,
      user,
    );
    setUserAndAuth(user, currentUser);
    dispatch(loginSuccess(currentUser));
  } catch (e) {
    dispatch(loginFailed(e));
  }
};
