import React from 'react';
import { Link } from 'react-router-dom';

const SingleUserView = (props) => {
    const {array} = props;
    return (
        <div className="App">
            {array.map((user)=>{
            return <p>{user.Name}</p>
            })}
            {/* {array} */}
        </div>
        // <div>
        //     Hello World
        // </div>
    )
}

export default SingleUserView;