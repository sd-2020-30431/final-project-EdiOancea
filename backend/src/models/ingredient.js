module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 127],
      },
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    protein: {
      type: DataTypes.INTEGER,
    },
    carbohydrates: {
      type: DataTypes.INTEGER,
    },
    fat: {
      type: DataTypes.INTEGER,
    },
  }, {
    underscored: true,
  });

  Ingredient.associate = models => {};

  return Ingredient;
};
