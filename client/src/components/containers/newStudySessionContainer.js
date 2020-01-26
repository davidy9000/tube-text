import React, { Component } from 'react';
import NewStudySessionView from '../views/newStudySessionView';
import { addStudySessionThunk } from '../../store/actions/actionCreatorsThunks';
// connect to the store
import { connect } from 'react-redux';
// need withRouter to push userID of the study session into history of SPA
import { withRouter } from 'react-router-dom';
// in order to export two things
import { compose } from 'redux';

class NewStudySessionContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            videoUrl: "",
            studySessionName: "",
            studySessionDescription: "",
        }
    }

    handleChange=(event)=>{
        // name is directly associated with the key in the back end for a new study session
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        // creating the approprite object with the appropriate keys 
        // to push into my database 
        let study_sess = {
            videoUrl: this.state.videoUrl,
            studySessionName: this.state.studySessionName,
            studySessionDescription: this.state.studySessionDescription,
            userId: this.props.userId
        }
        this.props.addStudySessionThunk(study_sess);
        this.props.history.push(`/study_session/${this.props.userId}`);
    }

    render(){
        return(
            <div>
                <NewStudySessionView 
                    handleChange = {this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    userId={this.props.userId}
                />
            </div>
        )
    }
}

const mapState = (state) => {
    return({
        userSessions: state.userSessions,
        userId: state.userAuth.id
    })
}

const mapDispatch = (dispatch) => {
    return({
        addStudySessionThunk: (study_sess) => dispatch(addStudySessionThunk(study_sess)),
    })
}

export default compose(
    withRouter,
    connect(mapState, mapDispatch)
  )(NewStudySessionContainer);