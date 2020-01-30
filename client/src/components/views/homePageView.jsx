import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper'
// import image1 from 'images/image1.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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


const HomePageView = (props) => {
    
    const classes = useStyles();
    // const { allNotes, handleChange, handleSubmit, deleteNote, editNote, videoUrl,
    //     videoOnPlay, videoOnPause, thePlayer, videoSeek,
    //     editNoteState, onClickEdit, mustEdit,handleEditSubmit ,handleEditChange, onClickNull } = props;

    const items = [
        {
            name: "Picture #1",
            description: "Probably the most random thing you have ever seen!",
            image: "../images/image1.png"
        },
        {
            name: "Picture #2",
            description: "Hello World!",
            image: "../images/image2.png"
        },
        {
            name: "Picture #3",
            description: "Hello World!",
            image: "../images/image3.png"
        }
    ];

       
        
    
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
            {/* <Carousel>
                {
                    items.map((item) => {
                        return(
                        // <div>{item.name}</div>
                        <div>
                            <img src={require('../images/image1.png')} alt="image1"/>
                            <img src={require('../images/image2.png')} alt="image2"/>
                            <img src={require('../images/image3.png')} alt="image3"/>
                        </div>
                        // <img src={require(`${item.image}`)} alt="image1"/>

                       
                        )
                    })
                }
            </Carousel> */}
           
            <div style={{backgroundColor: 'white', textAlign: 'center', color: 'black', width: '100%', margin: '0px', padding: '10px'}}><h1>Take Timestamped Video Notes in Real Time</h1></div>
            <img src={require('../images/image1.png')} alt="image1" style={{width: '100%', margin: '0px'}}/>
            
            <div style={{backgroundColor: 'white', textAlign: 'center', color: 'black', width: '100%', margin: '0px', padding: '11px'}}><h1>Create Unlimited Study Sessions With Any Video</h1></div>
            <img src={require('../images/image2.png')} alt="image2" style={{width: '100%'}}/>
            
            <div style={{backgroundColor: 'white', textAlign: 'center', color: 'black', width: '100%', margin: '0px', padding: '11px'}}><h1>Generate PDFs of your Notes to Export Anywhere</h1></div>
            <img src={require('../images/image3.png')} alt="image3" style={{width: '100%'}}/>
            
            <div style={{backgroundColor: 'white', textAlign: 'center', color: 'black', width: '100%', margin: '0px', padding: '11px'}}><h1>Log in or Sign up for an Account Today</h1></div>

        </div>

       

        

    
        
        
    )
    
}

// function Item(props)
// {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }

export default HomePageView;

