import * as at from '../../helpers/actionTypes';

export const setError = (err) => ({
  type: at.SET_ERROR,
  payload: err,
});
