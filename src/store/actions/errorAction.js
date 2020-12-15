import * as at from '../../helpers/actionTypes';
import customFetch from '../../helpers/customFetch';

export const getAllUserMessages = (email) => async (dispatch) => {
  const [res, err] = await customFetch(`/messages?email=${email}`);
  dispatch({
    type: at.GET_ALL_USER_MESSAGES,
    payload: {
      messages: res,
    },
  });
};

export const deleteMessage = (msgId) => async (dispatch) => {
  try {
    const [res, err] = await customFetch(`/messages/${msgId}`);
    dispatch({
      type: at.GET_ALL_USER_MESSAGES,
      payload: {
        messages: res,
        msgId,
      },
    });
  } catch (err) {}
};
