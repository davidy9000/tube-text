import * as type from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case type.FETCH_NOTES:
            return action.payload;
        case type.ADD_NOTE:
            {
                let temp = [...state, action.payload];
                temp.sort((a,b)=> a.videoTimestamp - b.videoTimestamp);
                return temp;
            }
            // return [...state, action.payload];
        case type.DELETE_NOTE:
            return state.filter((note) => note.id!==action.payload);
        case type.EDIT_NOTE:
            return state.map((note) => {
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