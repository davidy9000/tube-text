import React, { Component } from 'react';
import './App.css';
import SingleUserContainer from '../components/containers/singleUserContainer'
import SingleSessionContainer from '../components/containers/singleSessionContainer';
// import NewStudySessionContainer from '../components/containers/newStudySessionContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Grid from '@material-ui/core/Grid';



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

const style = {
    // color: 'white',
    textDecoration: 'none'
};



// class App extends Component {
const App = (props) => {
    // render(){
		const classes = useStyles();

		const SingleUserComponent = () => <SingleUserContainer/>
        const SingleStudySessionComponent = () => <SingleSessionContainer />
		// const NewStudySessionComponent = () => <NewStudySessionContainer/>

        return (
            <div>
                <div style={{borderBottom: '5px solid white'}}>
                    <AppBar position="static" className = {classes.customizeAppBar}>
                    <Toolbar className = {classes.customizeToolBar}>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" className={classes.title} color = "inherit">
                            TubeText
                        </Typography>
                        <Button className = {classes.customNavButton}>Sign Out</Button>
                    </Toolbar>
                    </AppBar>
                </div>
                <br/>
                  
                {/* <div className="separate-nav" style={{backgroundColor: "white"}}></div> */}

				<Router>
					<Switch>
						{/* <div className="App">
							<div className="App-header"> */}
								<Route exact path="/" render={SingleUserComponent}/>
								<Route exact path="/study_sessions/:sessionId" render={SingleStudySessionComponent}/>
								{/* <Route exat path ="/study_sessions/add_session" render={NewStudySessionComponent}/> */}
							{/* </div>
						</div> */}
					</Switch>
				</Router>
			</div>
        );
    // }
}

export default App;
