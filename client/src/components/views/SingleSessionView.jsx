import React from 'react';
// import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// import { palette, spacing, typography } from '@material-ui/system';
// import styled from 'styled-components';
// import { unstable_Box as Box } from '@material-ui/core/Box';

import '../../singleSessionCSS.css';

// const Box = styled.div`${palette}${spacing}${typography}`;

import Youtube from 'react-youtube';


//TEMPORARY FOR EDIT TESTING
const fakeObject = {
    id: 2,
    videoTimestamp: 123,
    noteRecord: "NEWEST TEST"
}

const SingleSessionView = (props) => {
    const { allNotes, handleChange, handleSubmit, deleteNote, editNote, videoUrl } = props;
    // console.log("The Hangle Change is: ", handleChange);
    return (
        <div className="overall-container">
            {/* <div className="App"> */}
            
            {/* <Container className="Container">
            <Box className="Box" m="auto"> */}
                
                {/* Divides first two grids to be rows */}
                <Grid className="main-grid"
                container 
                container spacing={1} 
                container direction="row"
                justify="center"
                alignItems="center" 
                wrap="wrap" > 

                        {/* 1/2 Large Grid */}
                        <Grid className="Grid" 
                        container direction="column"
                        item xs={6} 
                        justify="center" 
                        alignItems="center">

                            <Grid item xs={6}>
                                <div className="fake-video">
                                    <Youtube
                                        videoId = {videoUrl}
                                    />
                                </div>
                            </Grid>



                            <Grid item xs={6}>
                                <form onSubmit={handleSubmit}>
                                    {/* Temporary TimeStamp field */}
                                    <label>TimeStamp: </label><br/>
                                    <input type="text" name = "videoTimestamp" onChange={handleChange} ></input>
                                    <br/>
                                    <label>Note: </label><br/>
                                    {/* <input type="text" name = "noteRecord"onChange={handleChange} ></input> */}
                                    <br/>
                                    <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Enter Note Here" name = "noteRecord"onChange={handleChange} 
                                    style={{ minWidth: 400, }}/>
                                    <br/>
                                    <input className="note-record" type="submit"></input>

                                </form>
                            </Grid>
                        </Grid>

                        {/* 2/2 Large Grid */}
                        <Grid className="Grid" 
                        container spacing={3}
                        item xs={6} 
                        container direction="column"
                        justify="center" 
                        alignItems="center">

                            {/* <div className="notes-wrapper"> */}
                            <Paper style={{minHeight: 550, minWidth: 600, maxHeight: 550, overflow: 'auto', backgroundColor: 'white'}}>
                                <List className="List">

   
                                    {allNotes.map((note)=>{
                                        return (
                                            <ListItem className="ListItem"
                                            alignItems="center">
                                                <Grid item xs={3} className="notes-grid">
                                                    <div className="individual-note">
                                                        <button onClick = {() => deleteNote(note.id)} id = {note.id}>Delete {note.noteRecord}</button>
                                                        <button onClick = {() => editNote(fakeObject)}>{note.noteRecord}</button>
                                                        <p>{note.noteRecord}</p>
                                                        
                                                    </div>
                                                </Grid>
                                            </ListItem>
                                            )
                                        })}
                                  
                                </List>
                            </Paper>
                            {/* </div> */}

                            {/* <Grid item xs={3}>
                                <div className="test-grid">Test</div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="test-grid">Test</div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="test-grid">Test</div>
                            </Grid> */}

                        </Grid>
                        
                        
                    
                </Grid>

                    
                    
                {/* </div> */}
                {/* </Box>
            </Container> */}
        </div>

    )
}

export default SingleSessionView;