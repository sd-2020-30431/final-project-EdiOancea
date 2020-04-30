require('dotenv').config();

const {
	DB_NAME_DEV,
	DB_USER_DEV,
	DB_PASSWORD_DEV,
	DB_HOST_DEV,
	DB_DIALECT_DEV,
} = process.env;

module.exports = {
  development: {
    username: DB_USER_DEV,
    password: DB_PASSWORD_DEV,
    database: DB_NAME_DEV,
    host: DB_HOST_DEV,
    dialect: DB_DIALECT_DEV,
    operatorsAliases: false,
  },
  test: {
    username: '',
    password: null,
    database: '',
    host: '',
    dialect: '',
    operatorsAliases: false,
  },
  production: {
    username: '',
    password: null,
    database: '',
    host: '',
    dialect: '',
    operatorsAliases: false,
  },
};
