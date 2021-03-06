import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import SignUpPageComponent from 'components/SignUpPage';
import getValidate from 'containers/form/getValidate';
import { signUp } from 'actions/auth';

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
			test: function (repeatPassword) {
				const { password } = this.options.context.values;

				return repeatPassword === password;
			},
		}),
});

const SignUpPage = () => {
	const dispatch = useDispatch();
	const submitError = useSelector(state => state.formError.signUp);
	const onSubmit = data => dispatch(signUp(data));
	const validate = getValidate(schema);

	return (
		<SignUpPageComponent
			{...{
				onSubmit,
				validate,
				submitError,
			}}
		/>
	);
};

export default SignUpPage;
