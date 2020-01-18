import React, { Component } from 'react';
import SingleSessionView from '../views/SingleSessionView';
import { connect } from 'react-redux';
import { fetchNotesThunk } from '../../store/actions/actionCreatorsThunks';

class SingleSessionContainer extends Component {
    componentDidMount() {
        this.props.fetchNotesThunk();
    }
    render() {
        return(
            <SingleSessionView allNotes = {this.props.allNotes} />
        )
    }
}

const mapState = (state) => {
    return({
        allNotes: state.allNotes
    })
}

const mapDispatch = (dispatch) => {
    return({
        fetchNotesThunk: () => dispatch(fetchNotesThunk())
    })
}

export default connect(mapState, mapDispatch)(SingleSessionContainer);