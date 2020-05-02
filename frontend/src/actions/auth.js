import request from 'utils/request';
import { getLoggedUser } from 'actions/user';

export const authenticateUser = token => ({
  type: 'AUTHENTICATE_USER',
  payload: token,
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});

export const signUp = data => async dispatch => {
  const result = await request('POST', '/users', data);
  const { error } = result;

  return error ? result : await dispatch(signIn(data));
};

export const signIn = data => async dispatch => {
  const res = await request('POST', '/auth', data);
  const { token } = await res.json();
  dispatch(authenticateUser(token));

  return dispatch(getLoggedUser());
};
