import * as type from '../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case type.CURRENT_VIDEO:
            return action.payload;
        default:
            return state;
    }
}