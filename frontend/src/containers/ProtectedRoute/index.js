import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Route } from 'react-router-dom';
import { getLoggedUser } from 'actions/user';
import { authenticateUser } from 'actions/auth';

const ProtectedRoute = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(state => state.loggedUser.token);
  
  useEffect(() => {
    const storageToken = localStorage.getItem('token');

    if (!token && !storageToken) {
      history.push('/signin');
    }

    if (!token) {
      dispatch(authenticateUser(storageToken));
    }
  }, [token, history, dispatch]);

  useEffect(() => {
    dispatch(getLoggedUser());
  }, [token, dispatch]);

  return <Route {...props} />;
};

export default ProtectedRoute;
