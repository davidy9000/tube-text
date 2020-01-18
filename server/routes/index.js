const express = require('express');
const router = express.Router();

// Subrouters;
const usersRouter = require('./users_controller');
const studySessionsRouter = require('./study_session_controller');
const noteRouter = require('./notes_controller');

router.use('/users', usersRouter);
router.use('/studysessions', studySessionsRouter);
router.use('/notes', noteRouter);

//StudySession
//CRUD OPERATION: CREATE (Add)
// HTTP VERB: POST;
router.post('/studysession/add', studySessionRouter.addStudySession);


//NOTES
//CRUD OPERATION: CREATE (Add)
// HTTP VERB: POST;
router.post('/notes/add', noteRouter.addNote);


// Error handling middleware;
router.use((req, res, next) => {
	const error = new Error("Not Found, Please Check URL!");
	error.status = 404;
	next(error);
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
