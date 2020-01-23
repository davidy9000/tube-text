import React, { Component } from 'react';
import SingleSessionView from '../views/SingleSessionView';
import PdfView from '../views/pdfView';
import { connect } from 'react-redux';
import { fetchNotesThunk, addNotesThunk} from '../../store/actions/actionCreatorsThunks';
//need to handle refresh issue
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';

class PdfContainer extends Component {
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

    }

    render() {
        console.log("pdfcontainer allnotes: ", this.props.allNotes);
        return(
            <div>
                
                <PdfView
                allNotes = {this.props.allNotes} 
                videoSeek = {this.videoSeek}
                currStudySession = {this.props.currStudySession}
                />

            </div>
        )
    }
}

const mapState = (state) => {
    console.log("I am in state", state);
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
    })
}

// export default connect(mapState, mapDispatch)(SingleSessionContainer);

export default compose(
    withRouter,
    connect(mapState, mapDispatch)
)(PdfContainer);