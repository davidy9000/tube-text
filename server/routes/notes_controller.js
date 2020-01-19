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

/******************* Post/Create routes for Note table *******************/
router.post('/add', addNote);

/******************* Delete Router *********************/
router.delete('/delete/:id', deleteNote);

/*********************** Get functions *******************/
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

/*************** Post/Create Note Functions **********/

function addNote(req, res, next) {
    //we expect body as payload from post request 
    // from front end (in the thunk the axios post call 
    // will have two arguments: 1. is the endpoint 
    // to hit and 2. is the payload to send (payload 
    // to send is whatever form you are using to make a new note))
    Note.create(req.body)
    //so sends back 201 response and also sends newNote 
    // (find this in the data key in the response object - 
    // response.data) to redux store for action.payload
    .then((newNote)=>res.status(201).json(newNote))
    .catch(err=>next(err));
};

/******************* Delete Function *********************/
function deleteNote(req, res, next){
    
    // Note.findById(req.params.id)
    // .then(
    // (note) => Note.destroy((Note.finddByID(req.params.id)){
        // (Note.findById(req.params.id))
    Note.destroy({
        where: {id: req.params.id},
    }).then((response) => res.status(204).json(req.params.id))
    .catch((err) => next(err));
    // res.status(204).json(Note);

    // Note.findById(req.params.id)
    // .then((singleNote) => Note.destroy({
    //     where: {id:singleNote.Noteid}
    // }))

    // .then((response) => 
    // {
    //     res.send("Got a delete request");
    //     return res.status(204);
    // })
    // .catch((error)=> next(error))
    // res.send("Got a delete request");
    // Note.findById(req.params.id)
};



module.exports = router;