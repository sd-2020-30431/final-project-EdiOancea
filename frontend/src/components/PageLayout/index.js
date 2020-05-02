import React from 'react';

import AppBar from 'containers/AppBar';

const PageLayout = ({ children }) => (
	<>
		<AppBar />
		{children}
	</>
);

export default PageLayout;
