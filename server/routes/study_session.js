//  This file handles all of the function calls for the Study Session table
const express = require('express');
const router = express.Router();
const { StudySession } = require('../database/models');

function getAllStudySession(req, res, next) {
    StudySession.find()
        .then(study_session => res.json(study_session))
        .catch(err => console.log(err));
}

module.exports = router;