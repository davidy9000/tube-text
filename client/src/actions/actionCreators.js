import * as types from './actionTypes';

// ACTION CREATOR;
const fetchNotes = (all_notes) => {
    return {
        type: FETCH_NOTES,
        payload: all_notes
    }
}

const deleteNote = (note_id) => {
    return {
        type: DELETE_NOTE,
        payload: note_id
    }
}

const addNotes = (note) => {
    return {
        type: ADD_NOTES,
        payload: note
    }
}

const editNote = (note_id) => {
    return {
        type: EDIT_NOTE,
        payload: note_id
    }
}

export const fetchNotesThunk = (all_notes) => (dispatch) => {
    console.log("fetch thunk");
}

export const addNotesThunk = (note) => (dispatch) => {
    console.log("add thunk");
}

export const deleteNoteThunk = (note_id) => (dispatch) => {
    console.log("delete thunk");
}

export const editNoteThunk = (note_id) => (dispatch) => {
    console.log("edit thunk");
}