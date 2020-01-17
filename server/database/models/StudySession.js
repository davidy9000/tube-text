const Sequelize = require('sequelize');
const db = require('../db');

const StudySession = db.define("study_session", {

	studySessionId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},

	videoUrl: {
		type: Sequelize.STRING,
		allowNull: false
	},

	notesArr: {
        type: Sequelize.JSON,
    },

    studySessionName: {
        type: Sequelize.STRING,
    }

});

module.exports = StudySession;
