import React, { Component } from 'react';
import SingleSessionView from '../views/SingleSessionView';
// import PdfView from '../views/PdfView';
import { connect } from 'react-redux';
import { fetchNotesThunk, addNotesThunk, deleteNoteThunk, editNoteThunk, fetchCurrentVideoThunk } from '../../store/actions/actionCreatorsThunks';
//need to handle refresh issue
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';

class SingleSessionContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            studySessionId: 0,
            videoTimestamp: 0,
            noteRecord: "",
            // editNoteState: false,
            editId: null
        }

        this.thePlayer = React.createRef();
        this.playerInterval = null;
    }

    handleChange=(event)=>{
        // console.log("I am changing input", [event.target.name], event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    //constructor here
    //hold state for fields here 

    //make handleSubmit function
    //take the state and pass it to the thunk in this function

    onClickEdit=(noteId) => {
        console.log("The Note ID is: ", noteId);
        this.setState({
            // editNoteState: !this.state.editNoteState,
            editId: noteId
        });
        // () => editNoteThunk(this.state.editId)
        // console.log("editnote state!" + this.state.editNoteState);
        // console.log("editId: " + this.state.editId);
    }

    onClickNull= () => {
        this.setState({
            editId: null
        })
    };

    handleEditSubmit=(event)=>{
        event.preventDefault();
        let note = {
            studySessionId: this.props.currStudySession.id,
            videoTimestamp: this.state.videoTimestamp,
            noteRecord: this.state.noteRecord,
            id: this.state.editId
        }
        this.setState({
            editId: null
        })
        this.props.editNoteThunk(note);
    }

    handleEditChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log("the note: ", this.state.noteRecord));
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.playerInterval)
        let note = {
            studySessionId: this.props.currStudySession.id,
            videoTimestamp: this.state.videoTimestamp,
            noteRecord: this.state.noteRecord
        }
        // console.log("I am handling submit: ", note)
        this.props.addNotesThunk(note);
    }
    
    videoOnPlay = () => {
        // access to player in all event handlers via event.target
        // console.log(this.thePlayer.current.getCurrentTime())
        
        this.playerInterval = setInterval( () => {
            // console.log("current time: ",this.thePlayer.current.getCurrentTime());
            this.setState({
                videoTimestamp: this.thePlayer.current.getCurrentTime()
            })
        }, 1000)
    }

    videoOnPause = () => {
        // console.log("pausing")
        clearInterval(this.playerInterval);
        // console.log(this.playerInterval)
        // clearInterval(this.state.videoTimestamp)
    }

    videoSeek = (desiredTime) => {
        this.thePlayer.current.seekTo(desiredTime)
        // console.log('seeking', desiredTime)
    }
    
    componentDidMount(){
        // console.log("I am mounted");
        console.log(this.props);
        //use history to get the sessionID based on the route, and this way
        //on refresh we do not lose the notes
        this.props.fetchNotesThunk(this.props.match.params.sessionId);
        this.props.fetchCurrentVideoThunk(this.props.match.params.sessionId);

    }

    render() {
        return(
            <div>
                
                {/* <PdfView/> */}
                <SingleSessionView allNotes = {this.props.allNotes} 
                // addNotesThunk = {this.props.addNotesThunk} 
                handleChange = {this.handleChange} 
                handleSubmit={this.handleSubmit}
                onClickEdit={this.onClickEdit}
                mustEdit = {this.state.editId}
                handleEditSubmit = {this.handleEditSubmit}
                onClickNull={this.onClickNull}
                // editNoteState={this.state.editNoteState}
                handleEditChange = {this.handleEditChange}
                // currentNote = {this.state.noteRecord}

                deleteNote = {this.props.deleteNoteThunk}
                // editNote = {this.props.editNoteThunk}

                videoUrl = {this.props.currentVideo}

                videoOnPlay = {this.videoOnPlay}
                videoOnPause = {this.videoOnPause}
                videoSeek = {this.videoSeek}

                thePlayer = {this.thePlayer}
                />
            </div>
        )
    }
}

const mapState = (state) => {
    // console.log("I am in state");
    return({
        allNotes: state.allNotes,
        currStudySession: state.currentStudySession,
        currentVideo: state.currentVideo,
    })
}

const mapDispatch = (dispatch) => {
    // console.log("I am in dipsathc");
    return({
        fetchNotesThunk: (stud_sess_id) => dispatch(fetchNotesThunk(stud_sess_id)),
        addNotesThunk: (note) => dispatch(addNotesThunk(note)),
        deleteNoteThunk: (note_id) => dispatch(deleteNoteThunk(note_id)),
        editNoteThunk: (note) => dispatch(editNoteThunk(note)),
        fetchCurrentVideoThunk: (stud_sess_id) => dispatch(fetchCurrentVideoThunk(stud_sess_id)),
    })
}

// export default connect(mapState, mapDispatch)(SingleSessionContainer);

export default compose(
    withRouter,
    connect(mapState, mapDispatch)
)(SingleSessionContainer);