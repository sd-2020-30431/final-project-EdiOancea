import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [6, 70],
			},
		},
		firstName: {
			type: DataTypes.STRING,
			validate: {
				len: [3, 30],
			},
		},
		lastName: {
			type: DataTypes.STRING,
			validate: {
				len: [3, 30],
			},
		},
	}, { 
		underscored: true,
		paranoid: true,
		defaultScope: {
			attributes: {
				exclude: ['password'],
			},
		},
		scopes: {
			auth: {
				attributes: ['password', 'email'],
			},
		},
	});

  	User.beforeCreate(user => {
		user.password = bcrypt.hashSync(user.password, 10);
		user.email = user.email.toLowerCase();
	});

	User.associate = ({ WaterEntry, Ingredient, IngredientEntry }) => {
		User.hasMany(WaterEntry, { as: 'waterEntries' });
		//User.belongsToMany(Ingredient, { as: 'ingredientsUsed', through: IngredientEntry });
		User.hasMany(IngredientEntry);
	};

	return User;
};
