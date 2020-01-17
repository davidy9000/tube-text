// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const User = require('./User');
const StudySession = require('./StudySession');

StudySession.belongsTo(User);
User.hasMany(StudySession);

module.exports = {
	User,
	StudySession
};
