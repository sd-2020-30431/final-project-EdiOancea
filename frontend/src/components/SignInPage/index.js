import React from 'react';
import { Form } from 'react-final-form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import TextField from 'components/form/TextField';
import Error from 'components/form/Error';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
		margin: theme.spacing(1),
	},
}));

const SignInPage = ({ onSubmit, validate, submitError }) => {
  const classes = useStyles();

  return (
    <Form
      {...{
        onSubmit,
        validate,
        render: ({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.title}>
                  Sign in
                </Typography>
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
                <Error error={submitError} touched alwaysThere />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign in
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      Don't have an account? Sign up
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </form>
        ),
      }}
    />
  );
};

export default SignInPage;
