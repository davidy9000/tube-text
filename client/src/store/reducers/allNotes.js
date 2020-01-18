import * as type from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case type.FETCH_NOTES:
            return action.payload;
        case type.ADD_NOTE:
            return [...state, action.payload];
        default:
            return state;
    }
}