import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import ProtectedRoute from 'containers/ProtectedRoute';
import UnprotectedRoute from 'containers/UnprotectedRoute';

import SignUpPage from 'containers/SignUpPage';
import Dashboard from 'containers/Dashboard';

const App = () => (
  <Router>
    <Switch>
      <UnprotectedRoute path="/signup">
        <SignUpPage />
      </UnprotectedRoute>
      <ProtectedRoute path="/">
        <Dashboard />
      </ProtectedRoute>
    </Switch>
  </Router>
);

export default App;
