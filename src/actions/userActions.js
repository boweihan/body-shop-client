import * as types from '../constants/ActionTypes';
import Api from '../lib/api';

const URLS = {
  getUser: '/health',
};

export const loginLoading = () => ({
  type: types.LOGIN_SHOW_LOADING,
});

export const loginFailed = () => ({
  type: types.LOGIN_FAILED,
});

export const loginSuccess = response => ({
  type: types.LOGIN_SUCCESS,
  response,
});

export const login = () => async (dispatch) => {
  dispatch(loginLoading());
  try {
    const response = await Api.get(URLS.getUser);
    dispatch(loginSuccess(response));
  } catch (e) {
    dispatch(loginFailed(e));
  }
};
