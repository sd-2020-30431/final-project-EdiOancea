import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import ProtectedRoute from 'containers/ProtectedRoute';
import UnprotectedRoute from 'containers/UnprotectedRoute';

import SignUpPage from 'containers/SignUpPage';
import SignInPage from 'containers/SignInPage';
import Dashboard from 'containers/Dashboard';

const App = () => (
  <Router>
    <Switch>
      <UnprotectedRoute path="/signup">
        <SignUpPage />
      </UnprotectedRoute>
      <UnprotectedRoute path="/signin">
        <SignInPage />
      </UnprotectedRoute>
      <ProtectedRoute path="/">
        <Dashboard />
      </ProtectedRoute>
    </Switch>
  </Router>
);

export default App;
