const { User, StudySession, Note } = require('../database/models');

const seedDatabase = async () => {
	const tt = await User.create({
		username: "tubetext",
		password: "1234",
		email: "admin@tubetext.com"
	});

	const dummy_sess = await StudySession.create({
			videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			studySessionName: "Session 1",
			studySessionDescription: "Calculus 1"
		});

	const dummy_note = await Note.create({
			videoTimestamp: 69.420,
			noteRecord: "I don't care"
		});

	await dummy_sess.setUser(tt);
	await dummy_note.setStudySession(1);
	
}

module.exports = seedDatabase;
