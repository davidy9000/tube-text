import * as type from '../actions/actionTypes';

//the sessions for each individual user is stored in an array
//the action.payload should traverse through all the sessions and
//output it
export default(state = [], action) =>{
    switch(action.type){
        case (type.FETCH_SESSIONS):
            return (action.payload);
        case (type.ADD_STUDY_SESSION):
            return [...state, action.payload];
        default:
            return state; 
    }
}
/**
 * stretch features:
 * add session
 * edit session
 * delete session
 */