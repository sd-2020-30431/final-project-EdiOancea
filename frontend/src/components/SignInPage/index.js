import React from 'react';
import Grid from '@material-ui/core/Grid';

import PageLayout from 'components/PageLayout';
import TextField from 'components/form/TextField';
import FormWrapper from 'components/form/FormWrapper';
import LockAvatar from 'components/avatars/Lock';

const SignInPage = ({ onSubmit, validate, submitError }) => (
    <PageLayout>
		<FormWrapper 
			{...{
			onSubmit,
			validate,
			title: 'Sign in',
			submitButton: {
				text: 'Sign in',
			},
			secondaryButton: {
				text: 'Don\'t have an account? Sign up!',
				link: '/signup',
			},
			submitError,
			}}
		>
			<LockAvatar />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField name="email" label="Email Address" autoComplete="email" />
				</Grid>
				<Grid item xs={12}>
					<TextField name="password" label="Password" type="password" />
				</Grid>
			</Grid>
     	</FormWrapper>
    </PageLayout>
);

export default SignInPage;
