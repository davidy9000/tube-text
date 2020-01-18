// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const User = require('./User');
const StudySession = require('./StudySession');
const Note = require('./Note');

Note.belongsTo(StudySession);
StudySession.hasMany(Note);

StudySession.belongsTo(User);
User.hasMany(StudySession);

module.exports = {
	User,
	StudySession,
	Note
};
