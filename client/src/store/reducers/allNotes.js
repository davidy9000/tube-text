import * as type from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case type.FETCH_NOTES:
            return action.payload;
        case type.ADD_NOTE:
            return [...state, action.payload];
        case type.DELETE_NOTE:
            return state.filter((note) => note.id!=action.payload);
        default:
            return state;
    }
}