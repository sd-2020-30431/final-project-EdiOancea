import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import AppBarComponent from 'components/AppBar';
import { signOut } from 'actions/auth';

const AppBar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const token = useSelector(state => state.loggedUser.token);
	const dispatch = useDispatch();
	const history = useHistory();
	
	const handleSignOut = () => {		
		dispatch(signOut());
	};

	const handleAddIngredient = () => {
		history.push('/ingredient-form');;
	}

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBarComponent 
			{...{
				open: !!anchorEl,
				handleMenu,
				handleClose,
				handleSignOut,
				handleAddIngredient,
				anchorEl,
				authenticated: !!token,
			}}
		/>
	);
};

export default AppBar;
