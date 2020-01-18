//	This files handles all the function calls for the User table
const express = require("express");
const router = express.Router();
const { User, StudySession, Note } = require("../database/models");

//	
function findAllUsersStudyNote (req, res, next) {
  	User.findAll({ include: [{
		  model: StudySession,
		  include: [
			  Note
		  ]
	  }] 
	})
    	.then(user => res.json(user))
    	.catch(err => next(err));
}

/********* REFERENCE FUNCTION: DO NOT USE ********/
//	Get a specific note of a study session (for the edit note)
//	SELECT * FROM notes WHERE "StudySessionStudySessionId" = 1;
function thing1(req, res, next) {
	Note.findAll({ 
		include: [StudySession], 
		where: {
			studySessionId: 1
		}
	})
		.then(found => res.json(found))
		.catch(err=>next(err));
}

function findUsers (req, res, next) {
	User.findAll()
    	.then(user => res.json(user))
    	.catch(err => next(err));
};

function findUserStudySessions (req, res, next) {
	User.findAll({ include: [StudySession]})
		.then(studySess => res.json(studySess))
		.catch(err => next(err));
};
// Export our router, so that it can be imported to construct our apiRouter;
// module.exports = router;
module.exports = {
	findUsers, findUserStudySessions, findAllUsersStudyNote, thing1
}
