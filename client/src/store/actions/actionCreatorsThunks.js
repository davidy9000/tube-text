import * as types from './actionTypes';
import { bindActionCreators } from 'redux';

const test_arr = [
    {
        Name: "student 1"
    },
    {
        Name: "student 2"
    }
]

// ACTION CREATOR;
// const fetchNotes = (all_notes) => {
//     return {
//         type: types.FETCH_NOTES,
//         payload: all_notes
//     }
// }

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

const fetchSessions = (user_id) => {
    return{
        type: types.FETCH_SESSIONS,
        payload: user_id
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

export const fetchSessionsThunk = (user_id) => (dispatch) => {
    console.log("fetch sessions thunk");
    dispatch(fetchSessions(test_arr));
}