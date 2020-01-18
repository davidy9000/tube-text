//	This is how the table of StudySession is set up
const Sequelize = require('sequelize');
const db = require('../db');

const StudySession = db.define("studySession", {

	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},

	videoUrl: {
		type: Sequelize.STRING,
		allowNull: false
	},

    studySessionName: {
        type: Sequelize.STRING,
	},
	
	studySessionDescription: {
		type: Sequelize.STRING
	}

});

module.exports = StudySession;
