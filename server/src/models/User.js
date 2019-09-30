module.exports = (sequelize, DataTypes) => 
	sequelize.define('User', {
		name: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			unique:true,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	})