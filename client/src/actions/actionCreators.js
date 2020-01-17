// ACTION CREATOR;
const fetchNotes = (notes) => {
    return {
        type: FETCH_NOTES,
        payload: notes
    }
}

const removeNote = (note_id) => {
    return {
        type: REMOVE_NOTE,
        payload: note_id
    }
}

const addNotes = (note) => {
    return {
        type: ADD_NNOTES,
        payload: note
    }
}

const editNotes = (note_id) => {
    return {
        type: EDIT_NOTES,
        payload: note_id
    }
}