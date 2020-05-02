import request from 'utils/request';
import { getLoggedUser } from 'actions/user';

export const authenticateUser = token => ({
  type: 'AUTHENTICATE_USER',
  payload: token,
});

export const signUp = data => async dispatch => {
  await request('POST', '/users', data);

  return dispatch(authenticate(data));
};

export const authenticate = data => async dispatch => {
  const res = await request('POST', '/auth', data);
  const { token } = await res.json();
  dispatch(authenticateUser(token));

  return dispatch(getLoggedUser());
};
