import Bottle from 'bottlejs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import db from '../models';
import app from '../app';
import mediator from '../Mediator';
import UserController from '../controllers/User';
import AuthController from '../controllers/Auth';

import UserService from '../services/User';
import AuthService from '../services/Auth';

import UserRepository from '../repositories/User';

import AuthMiddleware from '../middlewares/Auth';

const bottle = new Bottle();

bottle.factory('jwt', () => jwt);
bottle.factory('bcrypt', () => bcrypt);

bottle.factory('app', app);
bottle.factory('db', db);
bottle.factory('AuthMiddleware', AuthMiddleware);
bottle.factory('mediator', mediator);
bottle.factory('UserController', UserController);
bottle.factory('AuthController', AuthController);
bottle.factory('UserService', UserService);
bottle.factory('AuthService', AuthService);
bottle.factory('UserRepository', UserRepository);

export default bottle;