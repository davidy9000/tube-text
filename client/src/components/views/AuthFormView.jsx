import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import '../styles/authFormStyles.css'

import { Link } from 'react-router-dom';
import '../styles/newStudySessionStyle.css'
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

const AuthFormView = props => {
  const { name, handleSubmit, error, handleChange, isLoggedIn, displayName, userName } = props;
  const classes = useStyles();

  return (
    <div>

      <div style={{borderBottom: '5px solid white', padding: '10px', width: '100%'}}>
          <AppBar position="static" className = {classes.customizeAppBar}>
          <Toolbar className = {classes.customizeToolBar}>
              <Typography variant="h6" className={classes.title} color = "inherit" style={{fontType: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '35px', color: '#CDDC39'}}>
                  TubeText
              </Typography>
              
              <Link to={'/signup'} >
                <Button variant="contained" color="primary" style={{margin: '10px'}}>
                  Sign Up
                </Button>
              </Link>

              <Link to={'/login'} >
                <Button variant="contained" color="primary">
                  Log in
                </Button>
              </Link>
              
          </Toolbar>
        
          </AppBar>
      </div>

      <div className="new-session-container">
        <div className="new-session-box">
          <div className="login">
            {isLoggedIn ? `Current user: ${userName}` : ""}
            <form onSubmit={handleSubmit} name={name}>
              {/* <div> */}
                <div class = 'title'>{displayName}</div>

                <label className="username" style= {{color:'#11153e', fontWeight: 'bold'}}>Username: </label>
                  <input type="text" name = "username" onChange ={handleChange} ></input>
                  <br/>
                  <br/>

                {/* <label className="username">
                  <small>Username</small>
                </label>
                <input name="username" type="text" onChange={handleChange} /> */}
              {/* </div> */}
              {/* <div> */}
              <label className="password" style= {{color:'#11153e', fontWeight: 'bold'}}>Password: </label>
                  <input type="password" name = "password" onChange ={handleChange} ></input>
                  <br/>
                  <br/>


                {/* <label className="password">
                  <small>Password</small>
                </label>
                <input name="password" type="password" onChange={handleChange} /> */}
              {/* </div> */}
              {/* <div> */}

                  <Button variant="contained" color="primary" type="submit">
                    {displayName}
                  </Button>
                  <br/>
                  <br/>
                {/* <button type="submit">{displayName}</button> */}
              {/* </div> */}
              {error && error.response && <div> {error.response.data} </div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFormView;
