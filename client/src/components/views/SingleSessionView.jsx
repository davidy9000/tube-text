import React from 'react';
import { Link } from 'react-router-dom';

const SingleSessionView = (props) => {
    const {allNotes, addNotesThunk} = props;

    let onSubmitNote 
    // addNotesThunk()
    return (
        <div className="App">
            {allNotes.map((notes)=>{
            return <p>{notes.noteRecord}</p>
            })}

            <form>
                {/* Temporary Study Session field */}
                Study Session: <input type="text" name="study-session"></input>
                <br/>
                {/* Temporary TimeStamp field */}
                TimeStamp: <input type="text" name="timestamp"></input>
                <br/>
                Note: <input type="text" name="note"></input>
                <br/>
                <input type="submit" onSubmit={addNotesThunk()}></input>

            </form>
            
        </div>

    )
}

export default SingleSessionView;