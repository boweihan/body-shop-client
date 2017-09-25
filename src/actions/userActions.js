import * as types from '../constants/ActionTypes';
import Api from '../lib/api';

const URLS = {
  // getUser: 'https://bsa-server.herokuapp.com/api/users/login',
  getUser: 'http://127.0.0.1:8080/api/users/login',
  createUser: 'http://127.0.0.1:8080/api/users/signup',
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

const setAuthToken = (credentials) => {
  const authToken = btoa(`${credentials.email}:${credentials.password}`); // eslint-disable-line
  localStorage.setItem('authToken', authToken); // eslint-disable-line
};

export const login = credentials => async (dispatch) => {
  dispatch(loginLoading());
  setAuthToken(credentials);
  try {
    const currentUser = await Api.post(
      URLS.getUser,
      { email: credentials.email },
    );
    dispatch(loginSuccess(currentUser));
  } catch (e) {
    dispatch(loginFailed(e));
  }
};

export const signUp = user => async (dispatch) => {
  dispatch(loginLoading());
  setAuthToken(user);
  try {
    const currentUser = await Api.post(
      URLS.createUser,
      user,
    );
    dispatch(loginSuccess(currentUser));
  } catch (e) {
    dispatch(loginFailed(e));
  }
};
