import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import SignUpPageComponent from 'components/SignUpPage';
import getValidate from 'containers/forms/getValidate';
import { signUp } from 'actions/signUp';

const schema = Yup.object().shape({
  firstName: Yup.string().nullable(),
  lastName: Yup.string().nullable(),
  email: Yup.string().email().required('Email is required.'),
  password: Yup.string().required('Password is required.'),
  repeatPassword: Yup
    .string()
    .required('This field is required.')
    .test({
      name: 'passwordMatch', 
      message: 'This field must match the password field.', 
      test: function(value) {
        const { password } = this.options.context.values;

        return value === password;
      },
    }),
});

const SignUpPage = () => {
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(signUp(data));
  const validate = getValidate(schema);
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };
  
  return (
    <SignUpPageComponent
      {...{
        onSubmit,
        validate,
        initialValues,
      }}
    />   
  );
};

export default SignUpPage;
