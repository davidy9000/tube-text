import React from 'react';
// import { Link } from 'react-router-dom';

//TEMPORARY FOR EDIT TESTING
const fakeObject = {
    id: 2,
    videoTimestamp: 123,
    noteRecord: "NEWEST TEST"
}

const SingleSessionView = (props) => {
    const { allNotes, handleChange, handleSubmit, deleteNote, editNote } = props;
    console.log("The Hangle Change is: ", handleChange);
    return (
        <div className="App">
            {allNotes.map((note)=>{
            return (
                <div>
                    <p>{note.noteRecord}</p>
                    <button onClick = {() => deleteNote(note.id)} id = {note.id}>Delete {note.noteRecord}</button>
                    <button onClick = {() => editNote(fakeObject)}>{note.noteRecord}</button>
                </div>
                )
            })}

            <form onSubmit={handleSubmit}>
                {/* Temporary Study Session field */}
                {/* <label>Study Session: </label>
                <input type="text" name = "studySessionId" onChange ={handleChange} ></input>
                <br/> */}
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