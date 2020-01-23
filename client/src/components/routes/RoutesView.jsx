import React from 'react';
import SingleUserContainer from '../containers/singleUserContainer';
import SingleSessionContainer from '../containers/singleSessionContainer';
import NewStudySessionContainer from '../containers/newStudySessionContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Login, Signup } from '../containers/authFormContainer';

import PdfContainer from '../containers/pdfContainer';
import HomePageContainer from '../containers/homePageContainer';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'left',
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
            backgroundColor: '#cddc39'
        },
        display: 'flex',
        // justify: 'flex-end'
        // flexGrow: 1,
        // textAlign: 'right',
        textTransform: 'none',
        // justify: 'center',
    },  
    card: {
        // display: 'flex',
        minWidth: 200,
        width: '50%',
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

const RoutesView = (props) => {
  const { isLoggedIn } = props;
  const SingleUserComponent = () => <SingleUserContainer/>
  const SingleStudySessionComponent = () => <SingleSessionContainer />
  const NewStudySessionComponent = () => <NewStudySessionContainer/>
  const PdfComponent = () => <PdfContainer/>
  const HomePageComponent = () => <HomePageContainer/>
  const classes = useStyles();

  return (
    <Switch>
      {/* Routes placed within this section are available to all visitors */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />

      {isLoggedIn && (
        <Switch>
          {/* Routes placed within this section are only available after
          logging in */}
            <div>
                <div style={{borderBottom: '5px solid white', padding: '10px'}}>
                    <AppBar position="static" className = {classes.customizeAppBar}>
                    <Toolbar className = {classes.customizeToolBar}>
                        <Typography variant="h6" className={classes.title} color = "inherit" style={{fontType: 'bold', fontFamily: 'Brush Script MT, sans-serif', fontSize: '50px'}}>
                            TubeText
                        </Typography>
                       
                    </Toolbar>
                  
                    </AppBar>
                </div>
                <br/>
        <Router>
          <Switch>
            <Route exact path="/" render={HomePageComponent}/>
                <Route exact path="/study_session/:userId" render={SingleUserComponent}/>
                {/* Be sure to put add_session before the :sessionId becasue :sessionId is a wildcard
                and basically anything that has study_sessions/ ... will lead to the single session component
                instead of the actual path wanted */}
                <Route exact path ="/study_sessions/add_session" render={NewStudySessionComponent}/>
                <Route exact path="/study_sessions/:sessionId" render={SingleStudySessionComponent}/>
                <Route exact path="/pdf" render={PdfComponent}/>
                
          </Switch>
        </Router>
      </div>

        </Switch>
      )}

      {/* Displays our Login component as a fallback */}
      <Route component={Login} />
    </Switch>
  );
}

export default RoutesView;