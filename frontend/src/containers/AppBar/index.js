import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppBarComponent from 'components/AppBar';
import { signOut } from 'actions/auth';

const AppBar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const token = useSelector(state => state.loggedUser.token);
	const dispatch = useDispatch();

	const handleSignOut = () => {		
		dispatch(signOut());
	};

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
				anchorEl,
				showAnchor: !!token,
			}}
		/>
	);
};

export default AppBar;
