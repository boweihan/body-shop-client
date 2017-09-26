import * as types from '../ActionTypes';

export const toggleLandingForm = (response) => {
  return {
    type: types.TOGGLE_LANDING_FORM,
    response,
  };
};
