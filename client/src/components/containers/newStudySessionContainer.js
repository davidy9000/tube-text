import React, { Component } from 'react';
// import SingleUserView from '../views/singleUserView';
import NewStudySessionView from '../views/newStudySessionView'
import { connect } from 'react-redux';
import { fetchSessionsThunk , addStudySessionThunk , currStudySessionThunk } from '../../store/actions/actionCreatorsThunks';
import { compose } from 'redux';
import {withRouter} from 'react-router-dom';

class NewStudySessionContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            videoUrl: "",
            studySessionName: "",
            studySessionDescription: "",
            userId: 0
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        let study_sess = {
            videoUrl: this.state.videoUrl,
            studySessionName: this.state.studySessionName,
            studySessionDescription: this.state.studySessionDescription,
            userId: this.state.userId
        }
        this.props.addStudySessionThunk(study_sess);
        this.props.history.push("/studysession/1");

    }

    // componentDidMount() {
    //     this.props.fetchSessionsThunk();
    // }
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

                <NewStudySessionView 
                    // sessions = {this.props.userSessions}
                    handleChange = {this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    // currentStudySession={this.props.currStudySessionThunk}
                />
            </div>
        )
    }
}

const mapState = (state) => {
    return({
        userSessions: state.userSessions,
    })
}

const mapDispatch = (dispatch) => {
    return({
        // fetchSessionsThunk: () => dispatch(fetchSessionsThunk()),
        addStudySessionThunk: (study_sess) => dispatch(addStudySessionThunk(study_sess)),
        // currStudySessionThunk: (study_sess) => dispatch(currStudySessionThunk(study_sess))
    })
}

export default compose(
    withRouter,
    connect(mapState, mapDispatch)
  )(NewStudySessionContainer);