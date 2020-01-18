import * as types from './actionTypes';
import { bindActionCreators } from 'redux';
import axios from 'axios';


const test_arr = [
    {
        Name: "student 1"
    },
    {
        Name: "student 2"
    }
]

// ACTION CREATOR;
const fetchNotes = (all_notes) => {
    return {
        type: types.FETCH_NOTES,
        payload: all_notes
    }
}

// const deleteNote = (note_id) => {
//     return {
//         type: types.DELETE_NOTE,
//         payload: note_id
//     }
// }

// const addNote = (note) => {
//     return {
//         type: types.ADD_NOTE,
//         payload: note
//     }
// }

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