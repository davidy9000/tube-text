import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/newStudySessionStyle.css'
import Button from '@material-ui/core/Button';


// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Grid from '@material-ui/core/Grid';

const NewStudySessionView = (props) => {
    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

    const {/*sessions,*/ handleChange, handleSubmit, /*currentStudySession*/ } = props;
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

                <Button type = 'submit'>submit</Button> 
                    {/* <Link to=""></Link> */}
                {/* </input> */}
            </form>
            </div>
        </div>
    )
}

export default NewStudySessionView;