import React, { Component } from 'react';
import SingleUserView from '../views/SingleUserView';
import { connect } from 'react-redux';
import { fetchSessionsThunk } from '../../store/actions/actionCreatorsThunks';

class SingleUserContainer extends Component {
    componentDidMount() {
        this.props.fetchSessionsThunk();
    }
    render(){
        return(
            <SingleUserView sessions = {this.props.userSessions}/>
        )
    }
}

const mapState = (state) => {
    return({
        userSessions: state.userSessions
    })
}

const mapDispatch = (dispatch) => {
    return({
        fetchSessionsThunk: () => dispatch(fetchSessionsThunk())
    })
}

export default connect(mapState, mapDispatch)(SingleUserContainer);