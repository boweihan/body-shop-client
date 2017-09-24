import * as types from '../constants/ActionTypes';

export const toggleLandingForm = (response) => {
  return {
    type: types.TOGGLE_LANDING_FORM,
    response,
  };
};
