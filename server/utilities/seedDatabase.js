const { User, StudySession, Note } = require('../database/models');

const seedDatabase = async () => {
	const JohnDoe = await User.create({
		userName: "johndoe19",
		pass: "1234",
		email: "john.doe@gmail.com"
	});

	const JaneDoe = await User.create({
		userName: "doejane",
		pass: "idsnofio",
		email: "idk@janedoe.com"
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

	const test1 = await Note.create({
		videoTimestamp: 343,
		noteRecord: "JJJJJJ"
	});

	await test1.setStudySession(2);

	const randStudSess = await StudySession.create({
		videoUrl: "https://facebook.com/",
		studySessionName: "Some test facebook",
		studySessionDescription: "Some description facebook"
	})
	await randStudSess.setUser(2);

	const test2 = await Note.create({
		videoTimestamp: 438,
		noteRecord: "RANDOM TEST DATA AGAIN"
	});

	await test2.setStudySession(3);
}

module.exports = seedDatabase;
