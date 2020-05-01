import express from 'express';
import bodyParser from 'body-parser';

export default ({
	mediator,
	AuthMiddleware,
}) => {
	const app = express();
	app.use(bodyParser.json());
	app.use(AuthMiddleware);

	mediator.forEach(({ route, method, callback }) => {
		console.log(method, route);
		app[method](route, callback);
	});

	return app;
};
