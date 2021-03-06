import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import ProtectedRoute from 'containers/ProtectedRoute';
import UnprotectedRoute from 'containers/UnprotectedRoute';

import SignUpPage from 'containers/SignUpPage';
import SignInPage from 'containers/SignInPage';
import IngredientPage from 'containers/IngredientPage';
import Dashboard from 'components/Dashboard';

const App = () => (
	<Router>
		<Switch>
			<UnprotectedRoute path="/signup">
				<SignUpPage />
			</UnprotectedRoute>
			<UnprotectedRoute path="/signin">
				<SignInPage />
			</UnprotectedRoute>
			<ProtectedRoute path="/ingredient-form">
				<IngredientPage />
			</ProtectedRoute>
			<ProtectedRoute path="/">
				<Dashboard />
			</ProtectedRoute>
		</Switch>
	</Router>
);

export default App;
