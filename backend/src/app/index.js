import express from 'express';
import bodyParser from 'body-parser';

export default ({ Mediator, AuthMiddleware, ErrorMiddleware }) => {
	const app = express();
	app.use(bodyParser.json());
	app.use(AuthMiddleware);

	Mediator.forEach(({ route, method, callback }) => {
		app[method](route, (req, res, next) => callback(req, res, next).catch(next));
	});
	
	app.use(ErrorMiddleware);

	return app;
};

