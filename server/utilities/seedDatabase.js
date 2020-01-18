const { User, StudySession, Note } = require('../database/models');

const seedDatabase = async () => {
	const JohnDoe = await User.create({
		userName: "johndoe19",
		pass: "1234",
		email: "john.doe@gmail.com"
	});

	const stud_sess = await Promise.all([
		StudySession.create({
			videoUrl: "https://youtube.com/",
			studySessionName: "Some test",
			studySessionDescription: "Some description"
		}),
		StudySession.create({
			videoUrl: "https://google.com/",
			studySessionName: "Some test Google",
			studySessionDescription: "Some description Google"
		})
	]);

	const some_notes = await Promise.all([
		Note.create({
			videoTimestamp: 123,
			noteRecord: "I don't care"
		}),
		Note.create({
			videoTimestamp: 344,
			noteRecord: "AAAAA"
		}),
		Note.create({
			videoTimestamp: 545,
			noteRecord: "REALLY?"
		})
	]);

	for(let i=0; i<stud_sess.length; i++){
		await stud_sess[i].setUser(JohnDoe);
	}

	for (let i=0; i<some_notes.length; i++) {
		await some_notes[i].setStudySession(1);
	}
}

module.exports = seedDatabase;
