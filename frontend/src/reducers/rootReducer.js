import { combineReducers } from 'redux';
import loggedUser from './loggedUser';
import formError from './formError';
import currentDay from './currentDay';

export default combineReducers({
  loggedUser,
  formError,
  currentDay,
});
