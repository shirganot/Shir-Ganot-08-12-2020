import * as at from '../../helpers/actionTypes';

export const setCurrTab = (tab) => ({
  type: at.SET_CURRENT_TAB_IN_MANAGER,
  payload: {
    tab,
  },
});

export const setChosenMsgId = (msgId) => ({
  type: at.SET_CHOSEN_MSG,
  payload: { msgId },
});
