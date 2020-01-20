import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const YourTheme = createMuiTheme({
//     palette: createPalette({
//       background: {
//         appBar: '#000'
//       }
//     }),
//     overrides: {
//       MuiAppBar: {
//         root: {
//           background: '#fff'
//         }
//       }
//     }
  
//   });

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    //   minHeight: 1,
    //   height: 30,
    },
    customizeAppBar:{
        backgroundColor: '#11153e',
        minHeight: 10,
        height: 35,
    },
    customizeToolBar:{
        minHeight: 35,
        height: 35,
    },
    customButton:{
        // backgroundColor: '#d24d4d',
        "&:hover": {
            backgroundColor: '#d24d4d'
        },
        minHeight: 25,
        height: 29,
        minWidth: 70,
        width: 70,
        // textSizeSmall: 'small',
        color: 'white',
        fontSize: '11px',
        borderRadius: 100,
        textTransform: 'none',
    
    },
    customNewSession:{
        "&:hover": {
            backgroundColor: '#cddc39'
        },
        // justify: 'flex-end'
        // flexGrow: 1,
        textAlign: 'right',
        textTransform: 'none',
    },
    customViewSession:{
        
    },
}));

const style = {
    // color: 'white',
    textDecoration: 'none'
};

const SingleUserView = (props) => {
    const classes = useStyles();
    const {sessions, /*handleChange, handleSubmit , */currentStudySession } = props;
    return (
        <div className="App">
            <AppBar position="static" className = {classes.customizeAppBar}>
                <Toolbar className = {classes.customizeToolBar}>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title} color = "inherit">
                        TubeText
                    </Typography>
                    <Button className = {classes.customButton}>Sign Out</Button>
                </Toolbar>
            </AppBar>

            <Button className = {classes.customNewSession}>New Study Session</Button>

            {sessions.map((session)=>{
                return <div className = "study-session" onClick={() => currentStudySession(session)}>
                    {/* <button onClick={() => currentStudySession(session)}>View Session</button> */}
                    <p>{session.studySessionName}</p>
                    <Link style = { style } to={`/study_sessions/${session.id}`}>
                        <Button >View Session</Button>
                    </Link>
                </div>
            })}
          
            {/* <form onSubmit={handleSubmit}>
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

            </form> */}
        </div>
    )
}

export default SingleUserView;