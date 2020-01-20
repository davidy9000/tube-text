import React from 'react';
import {Fragment} from 'react';
// import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Responsive from 'react-responsive';

// import { palette, spacing, typography } from '@material-ui/system';
// import styled from 'styled-components';
// import { unstable_Box as Box } from '@material-ui/core/Box';

import '../../singleSessionCSS.css';

// const Box = styled.div`${palette}${spacing}${typography}`;

import Youtube from 'react-youtube';


//Responsive functionality
const Desktop = props => <Responsive {...props} minWidth={1275} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={1274} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

//TEMPORARY FOR EDIT TESTING
const fakeObject = {
    id: 1,
    videoTimestamp: 123,
    noteRecord: "NEWEST TEST"
}

const SingleSessionView = (props) => {
    const { allNotes, handleChange, handleSubmit, deleteNote, editNote, videoUrl,
    opts, videoOnReady, videoOnPlay, videoStateChange, editNoteState, onClickEdit } = props;
    // console.log("The Hangle Change is: ", handleChange);
    return (
        <div className="overall-container">
            <Fragment>
                <Desktop>
                
                    {/* Divides first two grids to be rows */}
                    <Grid className="main-grid"
                    container 
                    container spacing={1} 
                    container direction="row"
                    justify="center"
                    alignItems="center" 
                    > 

                            {/* 1/2 Large Grid */}
                            <Grid className="Grid" 
                            container direction="column"
                            item xs={6} 
                        >

                                <Grid item xs={6}>
                                    
                                        <Youtube
                                            videoId = {videoUrl}
                                            opts={opts}
                                            // onReady={videoOnReady}
                                            onPlay={videoOnPlay}
                                            onStateChange={videoStateChange}
                                        />
                                    
                                </Grid>



                                <Grid item xs={12} className="form-grid"
                                
                                
                                >
                                    <form onSubmit={handleSubmit}>
                                        {/* Temporary TimeStamp field */}
                                        <br/>
                                        <label>TimeStamp: </label><br/>
                                        <input type="text" name = "videoTimestamp" onChange={handleChange} ></input>
                                        <br/><br/>
                                        <label>Note: </label><br/>
                                        <input type="text" name = "noteRecord" onChange={handleChange} style={{ minWidth: 400, minHeight: 50, overflow: 'auto'}} ></input>
                                        <br/>
                                        {/* <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Enter Note Here" name = "noteRecord"onChange={handleChange} 
                                        style={{ minWidth: 400, maxHeight: 200, overflow: 'auto'}}/> */}
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
                                                            <div className="note-buttons">
                                                                
                                                                <div className="edit-note">
                                                                    <Button onClick = {() => editNote(fakeObject)} >
                                                                    {/* <Button onClick={onClickEdit}> */}

                                                                            <IconButton aria-label="create" disabled color="secondary">
                                                                                <CreateIcon />
                                                                            </IconButton>
                                                                    </Button>
                                                                    {/* <button onClick = {() => editNote(fakeObject)}>{note.noteRecord}</button> */}
                                                                </div>

                                                                <div className="delete-note">
                                                                    <Button onClick = {() => deleteNote(note.id)} id = {note.id}>
                                                                        <IconButton aria-label="delete" disabled color="primary">
                                                                            <DeleteIcon />
                                                                        </IconButton>
                                                                    </Button>
                                                                    {/* <button onClick = {() => deleteNote(note.id)} id = {note.id}>Delete {note.noteRecord}</button> */}
                                                                </div>
                                                            </div>
                                                            <div className="note-record">
                                                                <p>{note.noteRecord}</p>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                </ListItem>
                                                )
                                            })}
                                    
                                    </List>
                                </Paper>

                            </Grid>
                    </Grid>

                </Desktop>


                {/* RESPONSIVE TABLET VIEW */}
                <Tablet>
                    <div>Tablet ?????</div>
                </Tablet>

                {/* RESPONSIVE MOBILE VIEW */}
                <Mobile>
                <div>Mobile ?????</div>
                </Mobile>

            </Fragment>
        </div>

    )
}

export default SingleSessionView;