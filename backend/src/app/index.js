import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export default ({ 
	Mediator: {
		authenticated,
		unAuthenticated,
	}, 
	AuthMiddleware,
	ErrorMiddleware,
}) => {
	const app = express();
	app.use(bodyParser.json());
	app.use(cors());

	const handleRoute = ({ route, method, callback }) => {
		app[method](route, (req, res, next) => callback(req, res, next).catch(next));
	};

	unAuthenticated.forEach(handleRoute);
	app.use(AuthMiddleware);
	authenticated.forEach(handleRoute);
	app.use(ErrorMiddleware);

	return app;
};
