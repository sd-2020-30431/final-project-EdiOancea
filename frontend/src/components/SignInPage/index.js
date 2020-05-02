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
          text: 'Sign up',
        },
        secondaryButton: {
          text: 'Don\'t have an account? Sign up!',
        },
        submitError,
      }}
    >
      <LockAvatar />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
    </FormWrapper>
  </PageLayout>
);

export default SignInPage;
