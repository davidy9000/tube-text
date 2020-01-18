//	This files handles all the function calls for the User table
const express = require("express");
const router = express.Router();
const { User } = require("../database/models");

function findAllUsersAndStudy(req, res, next) {
  	User.findAll({ include: [StudySession] })
    	.then(user => res.json(user))
    	.catch(err => console.log(err));
}

function findUsers(req, res, next) {
	User.findAll()
    	.then(user => res.json(user))
    	.catch(err => console.log(err));
}
// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
