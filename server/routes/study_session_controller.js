//  This file handles all of the function calls for the Note table
const express = require("express");
const router = express.Router();
const { StudySession } = require("../database/models");

module.exports = router;


function addStudySession(req, res, next) {

    //we expect body as payload from post request from front end (in the thunk the axios post call will have two arguments: 1. is the endpoint to hit and 2. is the payload to send (payload to send is whatever form you are using to make a new note))
    StudySession.create(req.body)
    //so sends back 201 response and also sends newNote (find this in the data key in the response object - response.data) to redux store for action.payload
    .then((newStudySession)=>res.status(201).json(newStudySession))
    .catch(err=>next(err));
}

module.exports = {
	addStudySession
}