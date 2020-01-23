import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/newStudySessionStyle.css'
import Button from '@material-ui/core/Button';

const NewStudySessionView = (props) => {

    const {handleChange, handleSubmit } = props;
    return (
        <div className="new-session-container">
            <div className="new-session-box">
                <div class = 'title'>New Session</div>
                <form onSubmit={handleSubmit}>
                <label style= {{color:'#11153e', fontWeight: 'bold'}}>Video URL: </label>
                <input type="text" name = "videoUrl" onChange ={handleChange} ></input>
                <br/>
                <br/>

                <label style= {{color:'#11153e', fontWeight: 'bold'}}>Study Session Name: </label>
                <input type="text" name = "studySessionName" onChange={handleChange} ></input>
                <br/>
                <br/>


                <label style= {{color:'#11153e', fontWeight: 'bold'}}>Study Session Description: </label>
                <input id="description" type="text" name = "studySessionDescription" onChange={handleChange} ></input>
                <br/>
                <br/>

                <label style= {{color:'#11153e', fontWeight: 'bold'}}>User Id: </label>
                <input type="text" name = "userId" onChange={handleChange} ></input>
                <br/>
                <br/>

                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
                <br/>
                <br/>

            </form>
            </div>
        </div>
    )
}

export default NewStudySessionView;