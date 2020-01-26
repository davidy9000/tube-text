import React, { Component } from 'react';
import SingleSessionView from '../views/SingleSessionView';
import { connect } from 'react-redux';
import { fetchNotesThunk, addNotesThunk, deleteNoteThunk, editNoteThunk, fetchCurrentVideoThunk } from '../../store/actions/actionCreatorsThunks';
//need to handle refresh issue
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class SingleSessionContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            studySessionId: 0,
            videoTimestamp: 0,
            noteRecord: "",
            editId: null
        }
        this.thePlayer = React.createRef();
        this.playerInterval = null;
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onClickEdit=(noteId) => {
        console.log("The Note ID is: ", noteId);
        this.setState({
            editId: noteId
        });
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
        });
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.playerInterval)
        let note = {
            studySessionId: this.props.currStudySession.id,
            videoTimestamp: this.state.videoTimestamp,
            noteRecord: this.state.noteRecord
        }
        this.props.addNotesThunk(note);
        event.target.reset(); //to empty the input box
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
        //use history to get the sessionID based on the route, and this way
        //on refresh we do not lose the notes
        console.log()
        this.props.fetchNotesThunk(this.props.match.params.sessionId);
        this.props.fetchCurrentVideoThunk(this.props.match.params.sessionId);
    }

    render() {
        return(
            <div>
                <SingleSessionView allNotes = {this.props.allNotes} 
                handleChange = {this.handleChange} 
                handleSubmit={this.handleSubmit}

                onClickEdit={this.onClickEdit}
                mustEdit = {this.state.editId}
                handleEditSubmit = {this.handleEditSubmit}
                onClickNull={this.onClickNull}
                handleEditChange = {this.handleEditChange}

                deleteNote = {this.props.deleteNoteThunk}

                videoUrl = {this.props.currentVideo}
                videoOnPlay = {this.videoOnPlay}
                videoOnPause = {this.videoOnPause}
                videoSeek = {this.videoSeek}

                thePlayer = {this.thePlayer}
                userId={this.props.userId}
                />
            </div>
        )
    }
}

const mapState = (state) => {
    return({
        allNotes: state.allNotes,
        currStudySession: state.currentStudySession,
        currentVideo: state.currentVideo,
        userId: state.userAuth.id
    })
}

const mapDispatch = (dispatch) => {
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