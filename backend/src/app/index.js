import express from 'express';
import bodyParser from 'body-parser';

export default ({ 
	Mediator: {
		authenticated,
		unAuthenticated,
	}, 
	AuthMiddleware,
	CheckAuthMiddleware,
	ErrorMiddleware,
}) => {
	const app = express();
	app.use(bodyParser.json());
	const handleRoute = ({ route, method, callback }) => {
		app[method](route, (req, res, next) => callback(req, res, next).catch(next));
	};

	unAuthenticated.forEach(handleRoute);
	app.use(AuthMiddleware);
	authenticated.forEach(handleRoute);
	app.use(ErrorMiddleware);

	return app;
};
