import { combineReducers } from 'redux';
import loggedUser from './loggedUser';
import formError from './formError';
import currentDay from './currentDay';
import foodEntry from './foodEntry';
import ingredient from './ingredient';

export default combineReducers({
  loggedUser,
  formError,
  currentDay,
  foodEntry,
  ingredient,
});
