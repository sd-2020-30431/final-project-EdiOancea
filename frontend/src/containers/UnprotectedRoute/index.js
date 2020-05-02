import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Route } from 'react-router-dom';
import { signOut } from 'actions/auth';

const UnprotectedRoute = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector(state => state.loggedUser.id);

  useEffect(() => {
    if (userId) {
      history.push('/');
    }
  }, [userId, history]);

  useEffect(() => {
    dispatch(signOut());
  }, [dispatch]);

  return <Route {...props} />;
};

export default UnprotectedRoute;
