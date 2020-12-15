import * as at from '../../helpers/actionTypes';
import customFetch from '../../helpers/customFetch';
import { setErrorTypeOfEmail } from './navigationAction';

export const getAllUserMessages = (email) => async (dispatch) => {
  try {
    const res = await customFetch(`/messages?email=${email}`);

    dispatch({
      type: at.GET_ALL_USER_MESSAGES,
      payload: {
        messages: res,
      },
    });

    dispatch(setErrorTypeOfEmail(null));
  } catch (err) {
    dispatch(setErrorTypeOfEmail(err.message));
  }
};

export const deleteMessage = (msgId) => async (dispatch) => {
  try {
    await customFetch(`/messages/${msgId}`, {
      method: 'DELETE',
    });

    dispatch({
      type: at.DELETE_MASSEGE,
      payload: {
        msgId,
      },
    });
  } catch (err) {
    dispatch(setErrorTypeOfEmail(`Delete message wasn't successful - ${err.message}`));
  }
};

// msgInfo={senderEmail, recevierEmail, msgContent}
export const createNewMessage = (msgInfo) => async (dispatch) => {
  try {
    const res = await customFetch(`/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msgInfo),
    });

    dispatch({
      type: at.CREATE_NEW_MSG,
      payload: {
        newMsg: res,
      },
    });
    dispatch(setErrorTypeOfEmail(null));
  } catch (err) {
    dispatch(setErrorTypeOfEmail(`Message was not sent because - ${err.message}`));
  }
};
