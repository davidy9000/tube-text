import React from 'react';
import { Link } from 'react-router-dom';

const SingleUserView = (props) => {
    const {sessions} = props;
    return (
        <div className="App">
            {sessions.map((session)=>{
            return <p>{session.studySessionName}</p>
            })}
            {/* {array} */}
        </div>
        // <div>
        //     Hello World
        // </div>
    )
}

export default SingleUserView;