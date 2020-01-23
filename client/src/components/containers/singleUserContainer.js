import React, { Component } from 'react';
import SingleUserView from '../views/singleUserView';
import { connect } from 'react-redux';
import { fetchSessionsThunk , addStudySessionThunk , currStudySessionThunk } from '../../store/actions/actionCreatorsThunks';

// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'

class SingleUserContainer extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         videoUrl: "",
    //         studySessionName: "",
    //         studySessionDescription: "",
    //         userId: 0
    //     }
    // }

    // handleChange=(event)=>{
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // handleSubmit=(event)=>{
    //     event.preventDefault();
    //     let study_sess = {
    //         videoUrl: this.state.videoUrl,
    //         studySessionName: this.state.studySessionName,
    //         studySessionDescription: this.state.studySessionDescription,
    //         userId: this.state.userId
    //     }
    //     this.props.addStudySessionThunk(study_sess);
    // }

    componentDidMount() {
        //pass in current user id
        this.props.fetchSessionsThunk(this.props.userAuth.id);
        //this.props.fetchSessionsThunk(this.props.match.params.userId)
    }
    render(){
        return(
            <div>
                {/* <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                        React & Material-UI Sample Application
                        </Typography>
                    </Toolbar>
                </AppBar> */}

                <SingleUserView sessions = {this.props.userSessions}
                    // handleChange = {this.handleChange} 
                    // handleSubmit={this.handleSubmit}
                    currentStudySession={this.props.currStudySessionThunk}
                />
            </div>
        )
    }
}

const mapState = (state) => {
    return({
        userAuth: state.userAuth,
        userSessions: state.userSessions,
    })
}

const mapDispatch = (dispatch) => {
    return({
        fetchSessionsThunk: (id) => dispatch(fetchSessionsThunk(id)),
        // addStudySessionThunk: (study_sess) => dispatch(addStudySessionThunk(study_sess)),
        currStudySessionThunk: (study_sess) => dispatch(currStudySessionThunk(study_sess))
    })
}

export default connect(mapState, mapDispatch)(SingleUserContainer);