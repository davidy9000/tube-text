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
			videoUrl: "r-yxNNO1EI8",
			studySessionName: "Session 1 of User 1",
			studySessionDescription: "Calculus 1"
		}),
		StudySession.create({
			videoUrl: "93p3LxR9xfM",
			studySessionName: "Session 2 of User 1",
			studySessionDescription: "Redux React"
		})
	]);

	const some_notes = await Promise.all([
		Note.create({
			videoTimestamp: 123.43924,
			noteRecord: "I don't care"
		}),
		Note.create({
			videoTimestamp: 344.43904,
			noteRecord: "AAAAA"
		}),
		Note.create({
			videoTimestamp: 545.0243214,
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
		videoTimestamp: 343.3943,
		noteRecord: "JJJJJJ"
	});

	await test1.setStudySession(2);

	const randStudSess = await StudySession.create({
		videoUrl: "https://facebook.com/",
		studySessionName: "Session 1 of User 2",
		studySessionDescription: "Some description facebook"
	})
	await randStudSess.setUser(2);

	const test2 = await Note.create({
		videoTimestamp: 438.9343724983,
		noteRecord: "RANDOM TEST DATA AGAIN"
	});

	await test2.setStudySession(3);
}

module.exports = seedDatabase;
