import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';
import navigationReducer from './navigationReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  messages: messagesReducer,
  navigationInfo: navigationReducer,
  error: errorReducer,
});
