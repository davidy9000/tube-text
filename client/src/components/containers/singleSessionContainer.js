import React, { Component } from 'react';
import SingleSessionView from '../views/SingleSessionView';
import { connect } from 'react-redux';
import { fetchNotesThunk, addNotesThunk } from '../../store/actions/actionCreatorsThunks';

class SingleSessionContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: 0,
            timeStamp: 0,
            noteRecord: ""
        }
    }

    //constructor here
    //hold state for fields here 

    //make handleSubmit function
    //take the state and pass it to the thunk in this function

    handleSubmit=(id_, timeStamp_, noteRecord_)=>{
        this.setState({
            id: id_,
            timeStamp: timeStamp_,
            noteRecord: noteRecord_
        })
        console.log(this.state.id);
    }


    componentDidMount(){
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