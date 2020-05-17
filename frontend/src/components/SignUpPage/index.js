import React from 'react';
import Grid from '@material-ui/core/Grid';

import PageLayout from 'components/PageLayout';
import TextField from 'components/form/TextField';
import FormWrapper from 'components/form/FormWrapper';
import LockAvatar from 'components/avatars/Lock';

const SignUpPage = ({ onSubmit, validate, submitError }) => (
	<PageLayout>
		<FormWrapper 
			{...{
				onSubmit,
				validate,
				title: 'Sign up',
				submitButton: {
				text: 'Sign up',
				},
				secondaryButton: {
				text: 'Already have an account? Sign in!',
				link: '/signin',
				},
				submitError,
			}}
		>
			<LockAvatar />
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField name="firstName" label="First Name" autoFocus />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Last Name" name="lastName" />
				</Grid>
				<Grid item xs={12}>
					<TextField label="Email Address" name="email" />
				</Grid>
				<Grid item xs={12}>
					<TextField name="password" label="Password" type="password" />
				</Grid>
				<Grid item xs={12}>
					<TextField name="repeatPassword" label="Repeat Password" type="password" />
				</Grid>
			</Grid>
		</FormWrapper>
	</PageLayout>
);

export default SignUpPage;
