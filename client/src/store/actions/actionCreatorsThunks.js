import * as types from './actionTypes';
// import { bindActionCreators } from 'redux';
import axios from 'axios';

// ACTION CREATOR;

//action creators for auth
const getUser = user => {
    return {
        type: types.GET_USER,
        payload: user
    }
}
const removeUser = () => {
    return {
        type: types.REMOVE_USER
    }
}

const fetchNotes = (all_notes) => {
    return {
        type: types.FETCH_NOTES,
        payload: all_notes
    }
}

const deleteNote = (note_id) => {
    return {
        type: types.DELETE_NOTE,
        payload: note_id
    }
}

const addNote = (note) => {
    return {
        type: types.ADD_NOTE,
        payload: note
    }
}

const editNote = (note) => {
    return {
        type: types.EDIT_NOTE,
        payload: note
    }
}

const fetchSessions = (all_sessions) => {
    return{
        type: types.FETCH_SESSIONS,
        payload: all_sessions
    }
}

const addStudySession = (study_session) => {
    return {
        type: types.ADD_STUDY_SESSION,
        payload: study_session
    }
}

const currentStudySession = (study_session) => {
    return {
        type: types.CURRENT_STUDY_SESSION,
        payload: study_session
    }
}

const fetchCurrentVideo = (videoUrl) => {
    return {
        type: types.CURRENT_VIDEO,
        payload: videoUrl
    }
}

const deleteStudySession = (session) => {
    return {
        type: types.DELETE_STUDY_SESSION,
        payload: session,
    }
}

//THUNKS

//SESSIONS

//need to change this so that it gets the sessions of whoever is logged in
export const fetchSessionsThunk = (id) => (dispatch) => {
    axios.get(`/api/studysessions/users/${id}`)
    .then((response) =>{
        dispatch(fetchSessions(response.data));
    })
    .then((error)=>{
        console.log(error);
    });
    // console.log("fetch study sessions thunk");
    
}

export const addStudySessionThunk = (study_session) => (dispatch) => {
    axios.post('/api/studysessions/add', study_session)
    .then((response) => {
        // console.log("the study session data is: ", response.data);
        return response.data;
    })
    .then((study_session) => dispatch(addStudySession(study_session)))
    .catch((error) => {
        console.log(error);
    })
    // console.log("add study session thunk");
}

export const currStudySessionThunk = (study_session) => (dispatch) => {
    let resolvedActionObject = currentStudySession(study_session);
    dispatch(resolvedActionObject);
}

//NOTES

export const fetchNotesThunk = (stud_sess_id) => (dispatch) => {
    axios.get(`/api/notes/studysessions/${stud_sess_id}`)
    .then((response) => {
        const myData = [].concat(response.data).sort((a,b) => a.videoTimestamp - b.videoTimestamp);
        dispatch(fetchNotes(myData));
    })
    .then((error)=>{
        console.log(error);
    });
    // console.log("fetch notes thunk");   
}

export const fetchCurrentVideoThunk = (stud_sess_id) => (dispatch) => {
    axios.get(`/api/studysessions/${stud_sess_id}`)
    .then((response)=> dispatch(fetchCurrentVideo(response.data.videoUrl)))
}

//Tony and Billie's comments - in the UI we need to make sure user input is valid before we allow it to go to backend
//NOTE: add note to parameter later when we actually implement this
export const addNotesThunk = (note) => (dispatch) => {
    axios.post('/api/notes/add', note)
    .then((response) => {
        // console.log("the data is: ", response.data);
        return response.data;
    })
    //response.data and note are the same value (b/c of anonymous arrow function)
    .then((note) => dispatch(addNote(note)))
    .catch((error)=>{
        console.log(error);
    });

    // console.log("add note thunk");
}

export const deleteNoteThunk = (note_id) => (dispatch) =>{
    // console.log("thunk note id:", note_id);
    axios.delete(`/api/notes/delete/${note_id}`)
    .then((noteid) => dispatch(deleteNote(note_id)))
    .catch((error) => {console.log(error)})

    // console.log("delete note thunk");
}

export const editNoteThunk = (note) => (dispatch) => {
    // console.log("edit note thunk");

    axios.put(`/api/notes/edit/${note.id}`, note)
    .then(() => dispatch(editNote(note)))
    .catch((error) => {console.log(error)})
    
}

export const deleteStudySessionThunk = (session) => (dispatch) => {
    // console.log("the session id is: ", session.id);
    // axios.get(`/api/notes/studysessions/${session.id}`)
    // .then((response) => {
    //     console.log ("The session notes are: ", response.data);
    //     for(let i = 0; i < response.data.length; i++){
    //         // axios.delete(`/api/notes/delete/${response.data[i].id}`)
    //         console.log ("the note is: ", response.data[i], " and the id is: ", response.data[i].id)
    //     }
    // })
    // .then(
        
    (axios.delete(`/api/studysessions/delete/${session.id}`))
    .then(() => dispatch(deleteStudySession(session.id)));
}
//auth thunks

export const me = () => async dispatch => {
    try {
        const res = await axios.get("/auth/me", { withCredentials: true});
        console.log(res,"hellooooooo");
        dispatch(getUser(res.data || {}));
    }
    catch(err) {
        console.error(err);
    }
};
//should put user ID stuff here
export const auth = (username, password, method, history, id) => async dispatch => {
    let res;
    try {
        res = await axios.post(`/auth/${method}`, { username, password }, { withCredentials: true });
        history.push(`/study_session/${id}`);
    }
    catch (authError) {
        return dispatch(getUser({ error: authError}));
    }
    try {
        dispatch(getUser(res.data));
    }
    catch (dispatchOrHistoryErr) {
        console.error(dispatchOrHistoryErr);
    }
};

export const logout = () => async dispatch => {
    try {
        await axios.delete("/auth/logout", { withCredentials: true });
        dispatch(removeUser());
    }
    catch (err) {
        console.error(err);
    }
};


