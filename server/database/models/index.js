// Here, we can prepare to register our Notes, set up associations between tables, and generate a barrel file for the Notes;

const User = require('./User');
const StudySession = require('./StudySession');
const Note = require('./Note');

Note.belongsTo(StudySession);
StudySession.hasMany(Note);

StudySession.belongsTo(User);
User.hasMany(StudySession);

/*********** This function was for testing associations **********/
// for (let assoc of Object.keys(Note.associations)) {
// 	for (let accessor of Object.keys(Note.associations[assoc].accessors)) {
// 		console.log(Note.name + '.' + Note.associations[assoc].accessors[accessor]+'()');
// 	}
// }

module.exports = {
	User,
	StudySession,
	Note
};
