const { User, StudySession} = require('../database/models');

const seedDatabase = async () => {
	const JohnDoe = await User.create({
		userName: "johndoe19",
		pass: "1234",
		email: "john.doe@gmail.com"
	});

	const stud_sess = await Promise.all([
		StudySession.create({
			videoUrl: "https://youtube.com/",
			notesArr: [
				{
					time: 120,
					note_string: "This is interesting"
				},
				{
					time: 153,
					note_string: "This is boring"
				},
				{
					time: 453,
					note_string: "Why am I doing this"
				}
			],
			studySessionName: "Some test"
		})
	]);

	for (let i=0; i<stud_sess.length; i++) {
		await stud_sess[i].setUser(JohnDoe);
	}
}

module.exports = seedDatabase;
