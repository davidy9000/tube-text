//  This file handles all of the function calls for the Study Session table
const express = require("express");
const router = express.Router();
const { User, StudySession, Note } = require("../database/models");

/**************** Get routes for StudySession table  ****************/
//	Gets all studySessions in the StudySession table
router.get('/', getAllStudySession);

//	Gets all the study sessions of a single user
//	Usage: replace :id with the id or pk of the desired user
//	Example Usage: /users/1  ===> gets all sessions of the user whose id=1
router.get('/users/:id', getAllSessionsOfUser);

//	Gets a single session by the studySessionId
//	Usage: replace :id with the id or pk of the desired study session
//	Example Usage: /1  ===> gets the session whose id=1
router.get('/:id', getStudySession);


//  Get Study Session by Id
function getStudySession(req, res, next) {
    StudySession.findById(req.params.id)
        .then(sess => res.json(sess))
        .catch(err => next(err));
};

//  SELECT * FROM "studySessions";
function getAllStudySession(req, res, next) {
    StudySession.findAll()
        .then(studySess => res.json(studySess))
        .catch(err => next(err));
};

// SELECT * FROM "studySessions" WHERE "userId" = 1;
function getAllSessionsOfUser(req, res, next) {
    StudySession.findAll({
        include: [User],
        where: {
            userId: req.params.id
        }
    })
        .then(found => res.json(found))
        .catch(err => next(err));
};

module.exports = router;