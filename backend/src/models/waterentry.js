'use strict';
module.exports = (sequelize, DataTypes) => {
    const WaterEntry = sequelize.define('WaterEntry', {
		quantity: {
			type: DataTypes.INTEGER,
		},
		date: {
			type: DataTypes.DATE,
		},
    }, {
		underscored: true,
	});

    return WaterEntry;
};