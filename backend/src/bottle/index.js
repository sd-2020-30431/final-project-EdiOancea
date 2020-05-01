import Bottle from 'bottlejs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import db from '../models';
import app from '../app';
import Mediator from '../Mediator';

import UserController from '../controllers/User';
import AuthController from '../controllers/Auth';
import WaterEntryController from '../controllers/WaterEntry';
import IngredientController from '../controllers/Ingredient';

import UserService from '../services/User';
import AuthService from '../services/Auth';
import ErrorService from '../services/Error';
import WaterEntryService from '../services/WaterEntry';
import IngredientService from '../services/Ingredient';

import UserRepository from '../repositories/User';
import WaterEntryRepository from '../repositories/WaterEntry';
import IngredientRepository from '../repositories/Ingredient';

import AuthMiddleware from '../middlewares/Auth';
import ErrorMiddleware from '../middlewares/Error';

import Validator from '../validators';

const bottle = new Bottle();

bottle.factory('jwt', () => jwt);
bottle.factory('bcrypt', () => bcrypt);

bottle.factory('app', app);
bottle.factory('db', db);
bottle.factory('AuthMiddleware', AuthMiddleware);
bottle.factory('ErrorMiddleware', ErrorMiddleware);
bottle.factory('Mediator', Mediator);
bottle.factory('UserController', UserController);
bottle.factory('AuthController', AuthController);
bottle.factory('WaterEntryController', WaterEntryController);
bottle.factory('IngredientController', IngredientController);
bottle.factory('UserService', UserService);
bottle.factory('AuthService', AuthService);
bottle.factory('ErrorService', ErrorService);
bottle.factory('WaterEntryService', WaterEntryService);
bottle.factory('IngredientService', IngredientService);
bottle.factory('UserRepository', UserRepository);
bottle.factory('WaterEntryRepository', WaterEntryRepository);
bottle.factory('IngredientRepository', IngredientRepository);
bottle.factory('Validator', Validator);

export default bottle;
