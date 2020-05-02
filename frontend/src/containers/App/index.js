import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import ProtectedRoute from 'containers/ProtectedRoute';
import SignUpPage from 'containers/SignUpPage';
import Dashboard from 'containers/Dashboard';

const App = () => (
  <Router>
    <Switch>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <ProtectedRoute path="/">
        <Dashboard />
      </ProtectedRoute>
    </Switch>
  </Router>
)

export default App;
