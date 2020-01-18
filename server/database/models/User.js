//	This is how the table of User is set up
const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define("user", {

	userId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},

	userName: {
		type: Sequelize.STRING,
		allowNull: false
	},

	pass: {
		type: Sequelize.TEXT,
		allowNull: false,
	},

	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			isEmail: true
		}
	},

});

module.exports = User;
