import * as types from './actionTypes';
import { bindActionCreators } from 'redux';
import axios from 'axios';

//test array for fetch
const test_arr = [
    {
        Name: "student 1"
    },
    {
        Name: "student 2"
    }
]

//test for add
const test_note = {
    studySessionId: 2,
    videoTimestamp: 888,
    noteRecord: "MOOOP"

}

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

// const editNote = (note_id) => {
//     return {
//         type: types.EDIT_NOTE,
//         payload: note_id
//     }
// }

const fetchSessions = (all_sessions) => {
    return{
        type: types.FETCH_SESSIONS,
        payload: all_sessions
    }
}

//THUNKS
// export const fetchNotesThunk = (all_notes) => (dispatch) => {
//     console.log("fetch thunk");
// }

// export const addNotesThunk = (note) => (dispatch) => {
//     console.log("add thunk");
// }

// export const deleteNoteThunk = (note_id) => (dispatch) => {
//     console.log("delete thunk");
// }

// export const editNoteThunk = (note_id) => (dispatch) => {
//     console.log("edit thunk");
// }

//SESSIONS
export const fetchSessionsThunk = () => (dispatch) => {
    axios.get('http://localhost:1234/api/studysessions/users/1')
    .then((response) =>{
        dispatch(fetchSessions(response.data));
    })
    .then((error)=>{
        console.log(error);
    });
    console.log("fetch sessions thunk");
    
}

//NOTES

export const fetchNotesThunk = () => (dispatch) => {
    axios.get('http://localhost:1234/api/notes/studysessions/1')
    .then((response) => {
        dispatch(fetchNotes(response.data));
    })
    .then((error)=>{
        console.log(error);
    });

    console.log("fetch notes thunk");
    
}

//Tony and Billie's comments - in the UI we need to make sure user input is valid before we allow it to go to backend
//NOTE: add note to parameter later when we actually implement this
export const addNotesThunk = (note) => (dispatch) => {
    axios.post('http://localhost:1234/api/notes/add', note)
    .then((response) => {
        console.log("the data is: ", response.data);
        return response.data;
    })
    //response.data and note are the same value (b/c of anonymous arrow function)
    .then((note) => dispatch(addNote(note)))
    .catch((error)=>{
        console.log(error);
    });

    console.log("add thunk");
}

export const deleteNoteThunk = (note_id) => (dispatch) =>{
    console.log("thunk note id:", note_id);
    axios.delete(`http://localhost:1234/api/notes/delete/${note_id}`)
    .then((response) => {
        console.log('response is: ', response);
        console.log('response data is: ', response.data);
    })
    .then((noteid) => dispatch(deleteNote(note_id)))
    .catch((error) => {console.log(error)})

    console.log("delete thunk");
}