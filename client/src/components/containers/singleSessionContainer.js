import React, { Component } from 'react';
import SingleSessionView from '../views/SingleSessionView';
import { connect } from 'react-redux';
import { fetchNotesThunk, addNotesThunk } from '../../store/actions/actionCreatorsThunks';

class SingleSessionContainer extends Component {

    //constructor here
    //hold state for fields here 

    //make handleSubmit function
    //take the state and pass it to the thunk in this function
    

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
        addNotesThunk: (note) => dispatch(addNotesThunk(note))
    })
}

export default connect(mapState, mapDispatch)(SingleSessionContainer);