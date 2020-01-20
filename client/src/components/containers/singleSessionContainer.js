import React, { Component } from 'react';
import SingleSessionView from '../views/SingleSessionView';
import { connect } from 'react-redux';
import { fetchNotesThunk, addNotesThunk, deleteNoteThunk, editNoteThunk } from '../../store/actions/actionCreatorsThunks';

class SingleSessionContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            studySessionId: 0,
            videoTimestamp: 0,
            noteRecord: ""
        }
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

    videoOnReady (event) {
        // access to player in all event handlers via event.target
        // event.target.playVideoAt(50) // 50 seconds
        const player = event.target
        // player.seekTo(50)
        // console.log(event.target)

        //   if(videotime !== oldTime) {
        //     onProgress(videotime);
        //   }
    }

    //  getTime = () => {
    //     console.log(player.getCurrentTime());
    //     this.setState({
    //         videoTimestamp: player.getCurrentTime()
    //     })
    // }
    
    videoOnPlay = (event) => {
        // access to player in all event handlers via event.target
        // event.target.playVideoAt(50) // 50 seconds
        const player = event.target
        player.playVideo()
        /// console.log(player.getCurrentTime())
        
        this.playerInterval = setInterval( () => {
            // console.log(player.getCurrentTime());
            this.setState({
                videoTimestamp: player.getCurrentTime()
            })
        }, 750)

        // console.log("vid on play, state: ", player.getPlayerState())
    }

    videoOnPause = (event) => {
        const player = event.target
        // console.log("pausing")
        player.pauseVideo()
        clearInterval(this.playerInterval);
        // console.log("vid on pause, state: ", player.getPlayerState())
        // console.log(this.playerInterval)
        // clearInterval(this.state.videoTimestamp)
    }

    videoStateChange (event) {
        const player = event.target
        // console.log(player.getCurrentTime())
    }
    
    componentDidMount(){
        // console.log("I am mounted");
        this.props.fetchNotesThunk(this.props.currStudySession.id);
    }

    render() {
        // const opts = {
        //     height: '390',
        //     width: '640',
        //     playerVars: { // https://developers.google.com/youtube/player_parameters
        //       autoplay: 1
        //     }
        // }

        return(
            <SingleSessionView allNotes = {this.props.allNotes} 
            // addNotesThunk = {this.props.addNotesThunk} 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}
            deleteNote = {this.props.deleteNoteThunk}
            editNote = {this.props.editNoteThunk}

            videoUrl = {this.props.currStudySession.videoUrl}
            videoOnReady = {this.videoOnReady}
            videoOnPlay = {this.videoOnPlay}
            videoStateChange = {this.videoStateChange}
            videoOnPause = {this.videoOnPause}
            />
        )
    }
}

const mapState = (state) => {
    // console.log("I am in state");
    return({
        allNotes: state.allNotes,
        currStudySession: state.currentStudySession
    })
}

const mapDispatch = (dispatch) => {
    // console.log("I am in dipsathc");
    return({
        fetchNotesThunk: (stud_sess_id) => dispatch(fetchNotesThunk(stud_sess_id)),
        addNotesThunk: (note) => dispatch(addNotesThunk(note)),
        deleteNoteThunk: (note_id) => dispatch(deleteNoteThunk(note_id)),
        editNoteThunk: (note) => dispatch(editNoteThunk(note))
    })
}

export default connect(mapState, mapDispatch)(SingleSessionContainer);