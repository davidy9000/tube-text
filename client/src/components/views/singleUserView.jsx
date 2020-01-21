import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';



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
        shadows: ['none'],
    },
    customizeToolBar:{
        minHeight: 35,
        height: 35,
    },
    customNavButton:{
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
            backgroundColor: '#cddc39',
            color: '#11153e'
        },
        display: 'flex',
        // justify: 'flex-end'
        // flexGrow: 1,
        // textAlign: 'right',
        textTransform: 'none',
        color: 'white',
        // justify: 'center',
    },  
    card: {
        // display: 'flex',
        minWidth: 200,
        width: '100%',
        textAlign: 'center',
        // justifyContent: 'center'
        // position: 'center',
        
    },
    // bullet: {
    //     display: 'inline-block',
    //     margin: '0 2px',
    //     transform: 'scale(0.8)',
    // },
    cardTitle: {
        fontSize: 20,
        color: '#11153e',
    },
    pos: {
        marginBottom: 12,
    },
    customViewSession:{
        position: 'center',
        justifyContent: 'center',
        "&:hover": {
            backgroundColor: '#cddc39'
        },
    },
}));

const style = {
    // color: 'white',
    textDecoration: 'none'
};


const SingleUserView = (props) => {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

    const {sessions, handleChange, handleSubmit ,currentStudySession } = props;
    return (
        <div className="App">
            {/* <AppBar position="static" className = {classes.customizeAppBar}>
                <Toolbar className = {classes.customizeToolBar}>
                    { <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> }
                    <Typography variant="h6" className={classes.title} color = "inherit">
                        TubeText
                    </Typography>
                    <Button className = {classes.customNavButton}>Sign Out</Button>
                </Toolbar>
            </AppBar> */}

            <Link style = { style } to={`/study_sessions/add_session`}>
                <Button className = {classes.customNewSession} >New Study Session</Button>
            </Link>
            {/* {sessions.map((session)=>{
                return <div className = "study-session" onClick={() => currentStudySession(session)}>
                    { <button onClick={() => currentStudySession(session)}>View Session</button> }
                    <p>{session.studySessionName}</p>
                    <Link style = { style } to={`/study_sessions/${session.id}`}>
                        <Button >View Session</Button>
                    </Link>
                </div>
            })} */}
            <Grid
                container
                
               
                justify="center"
                alignItems="center" 
            >
                <Grid 
                item
                style={{minWidth: '80%'}}
                
                >
                    <Paper style={{minHeight: 900, maxHeight:900, minWidth: '100%', maxWidth: '100%', overflow: 'auto', backgroundColor: '#0d0514', border: '1px solid white'}}>

                        <List className="List">
                            {sessions.map((session)=> {
                                return (
                                    <ListItem className = "study-session" onClick={() => currentStudySession(session)}
                                    alignItems='center'
                                    >
                                    {/* <div className = "study-session" onClick={() => currentStudySession(session)}> */}
                                        {/* <List>
                                            <ListItem alignItems= 'center'> */}

                                        
                                                <Card className={classes.card}>
                                                    <CardContent>
                                                        <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                                        {session.studySessionName}
                                                        </Typography>
                                                        <Typography>
                                                            {session.studySessionDescription}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Link style = { style } to={`/study_sessions/${session.id}`}>
                                                            <Button className = {classes.customViewSession}>View Session</Button>
                                                        </Link>
                                                    </CardActions>
                                                </Card>
                                        <br/>
                                        <br/>
                                    {/* </div> */}
                                    </ListItem>
                                            
                                )
                            })}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
{/* 
            // return (
            //     <Card className={classes.card}>
            //     <CardContent>
            //         <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
            //         Word of the Day
            //         </Typography>
            //         <Typography variant="h5" component="h2">
            //         be{bull}nev{bull}o{bull}lent
            //         </Typography>
            //         <Typography className={classes.pos} color="textSecondary">
            //         adjective
            //         </Typography>
            //         <Typography variant="body2" component="p">
            //         well meaning and kindly.
            //         <br />
            //         {'"a benevolent smile"'}
            //         </Typography>
            //     </CardContent>
            //     <CardActions>
            //         <Button size="small">Learn More</Button>
            //     </CardActions>
            //     </Card>
            // ) */}
          
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
            </form>  */}
        </div>
    )
}

export default SingleUserView;