import produce from 'immer';
import * as at from '../../helpers/actionTypes';

const initialState = {
  sent: [],
  received: [],
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case at.GET_ALL_USER_MESSAGES: {
      return payload.messages;
    }
    case at.DELETE_MASSEGE:
      return produce(state, (draft) => {
        draft.sent.filter((msg) => msg.id !== payload.msgId);
        draft.received.filter((msg) => msg.id !== payload.msgId);
      });

    case at.CREATE_NEW_MSG: {
      return produce(state, (draft) => {
        draft.sent.push(payload.newMsg);
      });
    }

    default:
      return state;
  }
}
