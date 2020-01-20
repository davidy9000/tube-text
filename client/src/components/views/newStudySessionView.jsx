import React from 'react';
import { Link } from 'react-router-dom';

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

                <input type="submit">
                    {/* <Link to=""></Link> */}
                </input>
        </form>
    )
}

export default NewStudySessionView;