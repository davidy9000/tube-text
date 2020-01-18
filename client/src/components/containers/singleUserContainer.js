import React, { Component } from 'react';
import SingleUserView from '../views/singleUserView';
import { connect } from 'react-redux';
import { fetchSessionsThunk } from '../../store/actions/actionCreatorsThunks';

class SingleUserContainer extends Component {
    componentDidMount() {
        this.props.fetchSessionsThunk();
    }
    render(){
        return(
            <SingleUserView array = {this.props.sessions}/>
        )
    }
}

const mapState = (state) => {
    return({
        sessions: state.userSessions
    })
}

const mapDispatch = (dispatch) => {
    return({
        fetchSessionsThunk: () => dispatch(fetchSessionsThunk())
    })
}

export default connect(mapState, mapDispatch)(SingleUserContainer);