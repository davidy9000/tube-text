import React from 'react';
// import { Link } from 'react-router-dom';

const SingleSessionView = (props) => {
    const { allNotes, handleChange, handleSubmit, deleteNote } = props;
    console.log("The Hangle Change is: ", handleChange);
    return (
        <div className="App">
            {allNotes.map((note)=>{
            return <p onClick = {() => deleteNote(note.id)} id = {note.id}>{note.noteRecord}</p>
            })}

            <form onSubmit={handleSubmit}>
                {/* Temporary Study Session field */}
                <label>Study Session: </label>
                <input type="text" name = "studySessionId" onChange ={handleChange} ></input>
                <br/>
                {/* Temporary TimeStamp field */}
                <label>TimeStamp: </label>
                <input type="text" name = "videoTimestamp" onChange={handleChange} ></input>
                <br/>
                <label>Note: </label>
                <input type="text" name = "noteRecord"onChange={handleChange} ></input>
                <br/>
                <input type="submit"></input>

            </form>
            
        </div>

    )
}

export default SingleSessionView;