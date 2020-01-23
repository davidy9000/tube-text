import React, { Component } from 'react';
// import SingleSessionView from '../views/SingleSessionView';
// import PdfView from '../views/pdfView';
// import { connect } from 'react-redux';
// import { fetchNotesThunk, addNotesThunk} from '../../store/actions/actionCreatorsThunks';
import HomePageView from '../views/homePageView';

//need to handle refresh issue
// import {withRouter} from 'react-router-dom';
// import { compose } from 'redux';

class HomePageContainer extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         studySessionId: 0,
    //         videoTimestamp: 0,
    //         noteRecord: "",
    //         // editNoteState: false,
    //         editId: null
    //     }

  
    // }

    
    
    // componentDidMount(){
    //     // console.log("I am mounted");
    //     console.log(this.props);
    //     //use history to get the sessionID based on the route, and this way
    //     //on refresh we do not lose the notes
    //     this.props.fetchNotesThunk(this.props.match.params.sessionId);

    // }

    render() {
        // console.log("pdfcontainer allnotes: ", this.props.allNotes);
        return(
            <div>
                
                {/* <PdfView
                allNotes = {this.props.allNotes} 
                videoSeek = {this.videoSeek}
                currStudySession = {this.props.currStudySession}
                /> */}

                <HomePageView/>

            </div>
        )
    }
}

// const mapState = (state) => {
//     console.log("I am in state", state);
//     return({
//         allNotes: state.allNotes,
//         currStudySession: state.currentStudySession,
//         currentVideo: state.currentVideo,
//     })
// }

// const mapDispatch = (dispatch) => {
//     // console.log("I am in dipsathc");
//     return({
//         fetchNotesThunk: (stud_sess_id) => dispatch(fetchNotesThunk(stud_sess_id)),
//     })
// }

// export default connect(mapState, mapDispatch)(SingleSessionContainer);

// export default compose(
//     withRouter,
//     connect(mapState, mapDispatch)
// )(PdfContainer);

export default HomePageContainer;