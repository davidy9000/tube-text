import React, { Component } from 'react';
import SingleUserView from '../views/singleUserView';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchSessionsThunk , addStudySessionThunk , currStudySessionThunk, logout } from '../../store/actions/actionCreatorsThunks';

// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'

class SingleUserContainer extends Component {
    componentDidMount() {
        //pass in current user id
        this.props.fetchSessionsThunk(this.props.userAuth.id);
        //this.props.fetchSessionsThunk(this.props.match.params.userId)
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
        currStudySessionThunk: (study_sess) => dispatch(currStudySessionThunk(study_sess)),
        logout: () => dispatch(logout())
    })
}

export default withRouter(connect(mapState, mapDispatch)(SingleUserContainer));