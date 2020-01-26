import * as type from '../actions/actionTypes';

/**All notes will be stored in an array for an invidvidual session */
export default (state = [], action) => {
    switch (action.type) {
        case type.FETCH_NOTES:
            return action.payload;
        case type.ADD_NOTE: //want to make sure once a note is added it is still in ascending order
            {
                let temp = [...state, action.payload];
                temp.sort((a,b)=> a.videoTimestamp - b.videoTimestamp);
                return temp;
            }
        case type.DELETE_NOTE:
            return state.filter((note) => note.id!==action.payload);
        case type.EDIT_NOTE:
            return state.map((note) => { //want to copy notes in the array as they are and update the edited one only
                if (note.id === action.payload.id) {
                    return {
                        ...note,
                        noteRecord: action.payload.noteRecord
                    }
                } 
                else return note;
            })
        default:
            return state;
    }
}