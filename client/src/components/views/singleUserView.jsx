import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';


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
    const {sessions, handleLogout,currentStudySession } = props;
    return (
        <div className="App">
            <br/>
            <Grid
                container
                container direction="column"
                container spacing = {3}
                justify="center"
                alignItems="center" 
            >
                <Grid item>
                    <Link style = { style } to={`/study_sessions/add_session`}>            
                        <Button variant="contained" color="primary">
                            New Study Session
                        </Button>
                    </Link>
                </Grid>
                <Grid 
                item
                style={{minWidth: '80%'}}  
                >
                    <Paper style={{minHeight: 900, maxHeight:900, minWidth: '100%', maxWidth: '100%', overflow: 'auto', backgroundColor: 'white', border: '1px solid white'}}>

                        <List className="List">
                            {sessions.map((session)=> {
                                return (
                                    <ListItem className = "study-session" onClick={() => currentStudySession(session)}
                                    alignItems='center'
                                    >

                                        
                                                <Card className={classes.card}
                                                style={{backgroundColor:'#a3a3c2'}}
                                                >
                                                    <CardContent>
                                                        <Typography className={classes.cardTitle} color="textSecondary" gutterBottom
                                                        style={{fontWeight: 'bold'}}
                                                        >
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

        </div>
    )
}

export default SingleUserView;