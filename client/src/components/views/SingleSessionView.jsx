import React from 'react';
// import { Link } from 'react-router-dom';

const SingleSessionView = (props) => {
    const { handleChange, handleSubmit, allNotes } = props;
    return (
        <div className="App">
            {allNotes.map((notes)=>{
            return <p>{notes.noteRecord}</p>
            })}

            <form onSubmit={handleSubmit}>
                {/* Temporary Study Session field */}
                Study Session: <input type="text" name = "studySessionId" onChange ={handleChange} ></input>
                <br/>
                {/* Temporary TimeStamp field */}
                TimeStamp: <input type="text" name = "videoTimestamp" onChange={handleChange} ></input>
                <br/>
                Note: <input type="text" name = "noteRecord"onChange={handleChange} ></input>
                <br/>
                <input type="submit"></input>

            </form>
            
        </div>

    )
}

export default SingleSessionView;