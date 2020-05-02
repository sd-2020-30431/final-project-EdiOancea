import { combineReducers } from 'redux';
import loggedUser from './loggedUser';
import formError from './formError';

export default combineReducers({
  loggedUser,
  formError,
});
