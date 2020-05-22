module.exports = (sequelize, DataTypes) => {
    const WaterEntry = sequelize.define('WaterEntry', {
		quantity: {
			type: DataTypes.INTEGER,
		},
		userId: {
			type: DataTypes.INTEGER,
			field: 'user_id',
		},
		date: {
			type: DataTypes.DATE,
		},
    }, {
		underscored: true,
		defaultScope: {
			attributes: {
				exclude: ['UserId'],
			},
		},
	});

	WaterEntry.associate = ({ User }) => {
		WaterEntry.belongsTo(User);
	}

    return WaterEntry;
};
