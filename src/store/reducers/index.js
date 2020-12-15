import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  messages: messagesReducer,
  navigationInfo: navigationReducer,
});
