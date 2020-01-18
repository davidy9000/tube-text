import React, { Component } from 'react';
import SingleSessionView from '../views/SingleSessionView';
import { connect } from 'react-redux';
import { fetchNotesThunk, addNotesThunk } from '../../store/actions/actionCreatorsThunks';

class SingleSessionContainer extends Component {
    componentDidMount() {
        this.props.fetchNotesThunk();
    }
    render() {
        return(
            <SingleSessionView allNotes = {this.props.allNotes} addNotesThunk = {this.props.addNotesThunk}/>
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
        fetchNotesThunk: () => dispatch(fetchNotesThunk()),
        addNotesThunk: () => dispatch(addNotesThunk())
    })
}

export default connect(mapState, mapDispatch)(SingleSessionContainer);