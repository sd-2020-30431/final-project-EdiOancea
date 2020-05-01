import Bottle from 'bottlejs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import db from '../models';
import app from '../app';
import mediator from '../Mediator';

import UserController from '../controllers/User';
import AuthController from '../controllers/Auth';
import WaterEntryController from '../controllers/WaterEntry';

import UserService from '../services/User';
import AuthService from '../services/Auth';
import WaterEntryService from '../services/WaterEntry';;

import UserRepository from '../repositories/User';
import WaterEntryRepository from '../repositories/WaterEntry';

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
bottle.factory('WaterEntryController', WaterEntryController);
bottle.factory('UserService', UserService);
bottle.factory('AuthService', AuthService);
bottle.factory('WaterEntryService', WaterEntryService);
bottle.factory('UserRepository', UserRepository);
bottle.factory('WaterEntryRepository', WaterEntryRepository);


export default bottle;