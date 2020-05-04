import request from 'utils/request';
import { setFormError, clearFormError } from './form';
import { getLoggedUser } from './user';

export const authenticateUser = token => ({
  type: 'AUTHENTICATE_USER',
  payload: token,
});

export const signOut = () => dispatch => {
  localStorage.setItem('token', '');

  dispatch({ type: 'SIGN_OUT' });
};

export const signUp = data => async dispatch => {
  const result = await request('POST', '/users', data);
  const { error } = result;

  if (error) {
    dispatch(setFormError('signUp', error));

    return;
  }

  dispatch(clearFormError('signUp'));
  dispatch(signIn(data));
};

export const signIn = data => async dispatch => {
  const result = await request('POST', '/auth', data);
  const { token, error } = result;

  if (token) {
    dispatch(clearFormError('signIn'));
    dispatch(authenticateUser(token));
    dispatch(getLoggedUser());
  };

  if (error) {
    dispatch(setFormError('signIn', error));
  }
};
