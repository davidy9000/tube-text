import * as type from '../actions/actionTypes';

//the current study session is one object, based on what the user clicked
export default (state = {}, action) => {
    switch (action.type) {
        case type.CURRENT_STUDY_SESSION:
            return action.payload;               
        default:
            return state;
    }
}