import React from 'react';
import { Link } from 'react-router-dom';

const SingleUserView = (props) => {
    const {sessions, handleChange, handleSubmit } = props;
    return (
        <div className="App">
            {sessions.map((session)=>{
            return <p>{session.studySessionName}</p>
            })}
          
            <form onSubmit={handleSubmit}>
                <label>Video URL: </label>
                <input type="text" name = "videoUrl" onChange ={handleChange} ></input>
                <br/>

                <label>Study Session Name: </label>
                <input type="text" name = "studySessionName" onChange={handleChange} ></input>
                <br/>

                <label>Study Session Description: </label>
                <input type="text" name = "studySessionDescription" onChange={handleChange} ></input>
                <br/>
                <br/>

                <label>User Id: </label>
                <input type="text" name = "userId" onChange={handleChange} ></input>
                <br/>

                <input type="submit"></input>

            </form>
        </div>
    )
}

export default SingleUserView;