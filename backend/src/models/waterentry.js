module.exports = (sequelize, DataTypes) => {
    const WaterEntry = sequelize.define('WaterEntry', {
		quantity: {
			type: DataTypes.INTEGER,
			validate: {
				min: {
					args: 0,
					msg: 'Water quantity can\'t be negative.',
				},
			},
		},
		date: {
			type: DataTypes.DATE,
		},
    }, {
		underscored: true,
	});

	WaterEntry.associate = ({ User }) => {
		WaterEntry.belongsTo(User);
	}

    return WaterEntry;
};
