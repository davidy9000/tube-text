import * as types from './actionTypes';
// import { bindActionCreators } from 'redux';
import axios from 'axios';

// ACTION CREATOR;
const fetchNotes = (all_notes) => {
    return {
        type: types.FETCH_NOTES,
        payload: all_notes
    }
}

const deleteNote = (note_id) => {
    return {
        type: types.DELETE_NOTE,
        payload: note_id
    }
}

const addNote = (note) => {
    return {
        type: types.ADD_NOTE,
        payload: note
    }
}

const editNote = (note) => {
    return {
        type: types.EDIT_NOTE,
        payload: note
    }
}

const fetchSessions = (all_sessions) => {
    return{
        type: types.FETCH_SESSIONS,
        payload: all_sessions
    }
}

const addStudySession = (study_session) => {
    return {
        type: types.ADD_STUDY_SESSION,
        payload: study_session
    }
}

const currentStudySession = (study_session) => {
    return {
        type: types.CURRENT_STUDY_SESSION,
        payload: study_session
    }
}

//THUNKS

//SESSIONS
export const fetchSessionsThunk = () => (dispatch) => {
    axios.get('http://localhost:1234/api/studysessions/users/1')
    .then((response) =>{
        dispatch(fetchSessions(response.data));
    })
    .then((error)=>{
        console.log(error);
    });
    // console.log("fetch study sessions thunk");
    
}

export const addStudySessionThunk = (study_session) => (dispatch) => {
    axios.post('http://localhost:1234/api/studysessions/add', study_session)
    .then((response) => {
        // console.log("the study session data is: ", response.data);
        return response.data;
    })
    .then((study_session) => dispatch(addStudySession(study_session)))
    .catch((error) => {
        console.log(error);
    })
    // console.log("add study session thunk");
}

export const currStudySessionThunk = (study_session) => (dispatch) => {
    let resolvedActionObject = currentStudySession(study_session);
    dispatch(resolvedActionObject);
}

//NOTES

export const fetchNotesThunk = (stud_sess_id) => (dispatch) => {
    axios.get(`http://localhost:1234/api/notes/studysessions/${stud_sess_id}`)
    .then((response) => {
        dispatch(fetchNotes(response.data));
    })
    .then((error)=>{
        console.log(error);
    });

    // console.log("fetch notes thunk");
    
}

//Tony and Billie's comments - in the UI we need to make sure user input is valid before we allow it to go to backend
//NOTE: add note to parameter later when we actually implement this
export const addNotesThunk = (note) => (dispatch) => {
    axios.post('http://localhost:1234/api/notes/add', note)
    .then((response) => {
        // console.log("the data is: ", response.data);
        return response.data;
    })
    //response.data and note are the same value (b/c of anonymous arrow function)
    .then((note) => dispatch(addNote(note)))
    .catch((error)=>{
        console.log(error);
    });

    // console.log("add note thunk");
}

export const deleteNoteThunk = (note_id) => (dispatch) =>{
    // console.log("thunk note id:", note_id);
    axios.delete(`http://localhost:1234/api/notes/delete/${note_id}`)
    .then((noteid) => dispatch(deleteNote(note_id)))
    .catch((error) => {console.log(error)})

    // console.log("delete note thunk");
}

export const editNoteThunk = (note) => (dispatch) => {
    // console.log("edit note thunk");

    axios.put(`http://localhost:1234/api/notes/edit/${note.id}`, note)
    .then(() => dispatch(editNote(note)))
    .catch((error) => {console.log(error)})
    
}