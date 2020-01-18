import React from 'react';
import { Link } from 'react-router-dom';

const SingleSessionView = (props) => {
    const {allNotes} = props;
    return (
        <div className="App">
            {allNotes.map((notes)=>{
            return <p>{notes.studySessionName}</p>
            })}
          
        </div>

    )
}

export default SingleSessionView;