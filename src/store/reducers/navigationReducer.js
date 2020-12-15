// import produce from 'immer';
import produce from 'immer';
import * as at from '../../helpers/actionTypes';

const initialState = {
  currTab: 'sent',
  errInManager: 'requiredSearchedEmail',
  chosenMsgId: null,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case at.SET_CURRENT_TAB_IN_MANAGER: {
      return produce(state, (draft) => {
        draft.currTab = payload.tab;
      });
    }

    case at.SET_ERROR_TYPE_OF_EMAIL: {
      return produce(state, (draft) => {
        draft.errInManager =
          payload.errInManager === 'required' ? 'requiredSearchedEmail' : payload.errInManager;
      });
    }

    case at.SET_CHOSEN_MSG: {
      return produce(state, (draft) => {
        draft.chosenMsgId = payload.msgId;
      });
    }

    default:
      return state;
  }
}
