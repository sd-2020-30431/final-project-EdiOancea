import request from 'utils/request';

export const setUser = user => ({
	type: 'SET_USER',
	payload: user,
})

export const getLoggedUser = () => async dispatch => {
	const res = await request('GET', '/users/me');
	const user = await res.json();

	dispatch(setUser(user));
};
