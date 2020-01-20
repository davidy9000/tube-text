import React, { Component } from 'react';
import SingleUserView from '../views/singleUserView';
import { connect } from 'react-redux';
import { fetchSessionsThunk , addStudySessionThunk , currStudySessionThunk } from '../../store/actions/actionCreatorsThunks';

class SingleUserContainer extends Component {
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
    }

    componentDidMount() {
        this.props.fetchSessionsThunk();
    }
    render(){
        return(
            <SingleUserView sessions = {this.props.userSessions}
                handleChange = {this.handleChange} 
                handleSubmit={this.handleSubmit}
                currentStudySession={this.props.currStudySessionThunk}
            />
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
        fetchSessionsThunk: () => dispatch(fetchSessionsThunk()),
        addStudySessionThunk: (study_sess) => dispatch(addStudySessionThunk(study_sess)),
        currStudySessionThunk: (study_sess) => dispatch(currStudySessionThunk(study_sess))
    })
}

export default connect(mapState, mapDispatch)(SingleUserContainer);