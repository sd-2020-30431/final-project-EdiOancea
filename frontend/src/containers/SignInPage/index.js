import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import SignInPageComponent from 'components/SignInPage';
import getValidate from 'containers/forms/getValidate';
import { signIn } from 'actions/auth';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Email is required.'),
  password: Yup.string().required('Password is required.'),
});

const SignUpPage = () => {
  const dispatch = useDispatch();
  const submitError = useSelector(state => state.formError.signIn);
  const onSubmit = data => dispatch(signIn(data));
  const validate = getValidate(schema);
  
  return (
    <SignInPageComponent
      {...{
        onSubmit,
        validate,
        submitError,
      }}
    />   
  );
};

export default SignUpPage;
