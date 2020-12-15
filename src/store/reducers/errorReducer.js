import produce from 'immer';
import * as at from '../../helpers/actionTypes';

const initialState = 'requiredSearchedEmail';

export default function errorReducer(state = initialState, { type, payload }) {
  switch (type) {
    case at.SET_ERROR: {
      return payload === 'required' ? 'requiredSearchedEmail' : payload;
    }
    default:
      return state;
  }
}
