//	This files handles all the function calls for the User table
const express = require("express");
const router = express.Router();
const { User, StudySession, Note } = require("../database/models");

/**************** Get routes for User table ****************/
//	Gets all users in the User table
router.get('/', findAllUsers);

//	Gets all users and all of their respective sessions and all of their respective notes
router.get('/studysessions/notes', findAllUsersStudyNote);

//	Gets all users and all of their respective sessions
router.get('/studysessions', findAllUserStudySessions);

//	Gets a single user by the userId
//	Usage: replace :id with the id or pk of the desired user
//	Example Usage: /1  ===> gets the user whose id=1
router.get('/:id', findUser);


//	Get User by Id
function findUser(req, res, next) {
	User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(err => next(err));
};

//	SELECT * FROM users;
function findAllUsers (req, res, next) {
	User.findAll()
    	.then(user => res.json(user))
    	.catch(err => next(err));
};


//	Get All Users and Study Sessions
function findAllUserStudySessions (req, res, next) {
	User.findAll({ include: [StudySession]})
		.then(studySess => res.json(studySess))
		.catch(err => next(err));
};

//	Get All Users, Study Sessions and Notes
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
};

module.exports = router;