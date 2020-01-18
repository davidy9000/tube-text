import React from 'react';
import { Link } from 'react-router-dom';

const SingleSessionView = (props) => {
    const {allNotes, addNotesThunk} = props;


    // addNotesThunk()
    //onChanges on the input field
    return (
        <div className="App">
            {allNotes.map((notes)=>{
            return <p>{notes.noteRecord}</p>
            })}
            
            <form onSubmit={handleSubmit}>
                {/* Temporary Study Session field */}
                Study Session: <input type="text" required ></input>
                <br/>
                {/* Temporary TimeStamp field */}
                TimeStamp: <input type="text" required ></input>
                <br/>
                Note: <input type="text" required ></input>
                <br/>
                <input type="submit"></input>

            </form>
            
        </div>

    )
}

export default SingleSessionView;