module.exports = (sequelize, DataTypes) => {
	const IngredientEntry = sequelize.define('IngredientEntry', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			validation: {
				min: {
					args: 0,
					msg: 'Quantity must be greater than 0.',
				},
			},
		},
		userId: {
			type: DataTypes.INTEGER,
			field: 'user_id',
		},
		ingredientId: {
			type: DataTypes.INTEGER,
			field: 'ingredient_id',
		},
		date: DataTypes.DATE,
	}, {
		underscored: true,
		defaultScope: {
			attributes: {
				exclude: ['ingredientId', 'UserId', 'IngredientId'],
			},
		},
	});

	IngredientEntry.associate = ({ User, Ingredient }) => {
		IngredientEntry.belongsTo(User, { as: 'user', foreignKey: 'userId' });
		IngredientEntry.belongsTo(Ingredient, { as: 'ingredient', foreignKey: 'ingredientId' });
	};

	return IngredientEntry;
};
