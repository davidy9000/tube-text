import React, { Component } from 'react';
import SingleUserView from '../views/singleUserView';
import { connect } from 'react-redux';

import { withRouter } from "react-router-dom";
import { fetchSessionsThunk , currStudySessionThunk, deleteStudySessionThunk, logout } from '../../store/actions/actionCreatorsThunks';

class SingleUserContainer extends Component {
    componentDidMount() {
        this.props.fetchSessionsThunk(this.props.userAuth.id);
    }
    //auth
    handleLogout = () => {
        this.props.logout();
        this.props.history.push("/login");
    }
    render(){
        return(
            <div>
                <SingleUserView sessions = {this.props.userSessions} handleLogout={this.handleLogout} 
                    currentStudySession={this.props.currStudySessionThunk}
                    deleteStudySession={this.props.deleteStudySessionThunk}
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
        currStudySessionThunk: (study_sess) => dispatch(currStudySessionThunk(study_sess)),
        deleteStudySessionThunk: (study_sess) => dispatch(deleteStudySessionThunk(study_sess)),
        logout: () => dispatch(logout())

    })
}

export default withRouter(connect(mapState, mapDispatch)(SingleUserContainer));