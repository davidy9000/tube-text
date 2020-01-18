//  This file handles all of the function calls for the Note table
const express = require('express');
const router = express.Router();
const { User, StudySession, Note } = require("../database/models");

/******************* Get routes for Note table *******************/
//	Gets all the notes in the Note table
router.get('/', getAllNotes);

//  Gets all the notes of a given session
//	Usage: replace :id with the id or pk of the desired user
//	Example Usage: /studysessions/1  ===> gets all sessions of the user whose id=1
router.get('/studysessions/:id', getAllNotesOfSession);

//	Gets a single note by the noteId
//	Usage: replace :id with the id or pk of the desired note
//	Example Usage: /1  ===> gets the note whose id=1
router.get('/:id', getNote);


//  Get note by Id
function getNote(req, res, next) {
    Note.findById(req.params.id)
        .then(note => res.json(note))
        .catch(err => next(err));
};

//  SELECT * from notes;
function getAllNotes(req, res, next) {
    Note.findAll()
        .then(notes => res.json(notes))
        .catch(err => next(err));
};

//	SELECT * FROM notes WHERE "studySessionId" = ;
function getAllNotesOfSession(req, res, next) {
	Note.findAll({ 
		include: [StudySession], 
		where: {
			studySessionId: req.params.id
		}
	})
		.then(found => res.json(found))
		.catch(err=>next(err));
};

module.exports = router;