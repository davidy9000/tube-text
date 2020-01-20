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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import { palette, spacing, typography } from '@material-ui/system';
// import styled from 'styled-components';
// import { unstable_Box as Box } from '@material-ui/core/Box';

import '../../singleSessionCSS.css';

// const Box = styled.div`${palette}${spacing}${typography}`;

import Youtube from 'react-youtube';


//Responsive functionality
const Desktop = props => <Responsive {...props} minWidth={1275} />;
const Tablet = props => <Responsive {...props} maxWidth={1274} />;
// const Mobile = props => <Responsive {...props} maxWidth={767} />;

//TEMPORARY FOR EDIT TESTING
const fakeObject = {
    id: 1,
    videoTimestamp: 123,
    noteRecord: "NEWEST TEST"
}

const SingleSessionView = (props) => {
    const { allNotes, handleChange, handleSubmit, deleteNote, editNote, videoUrl,
    opts, videoOnReady, videoOnPlay, videoStateChange, videoOnPause, editNoteState, onClickEdit } = props;
    // console.log("The Hangle Change is: ", handleChange);
    return (
        <div className="overall-container">
            <Fragment>

                {/* Responsive Desktop View */}
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
                            justify="center"
                            alignItems="center" 
                            >
                                <Grid item xs={12}>
                                    
                                        <Youtube
                                            videoId = {videoUrl}
                                            // opts={opts}
                                            // onReady={videoOnReady}
                                            onPlay={videoOnPlay}
                                            onPause={videoOnPause}
                                            onStateChange={videoStateChange}
                                        />
                                    
                                </Grid>
                                <br/>
                               

                                <Grid item xs={12} className="form-grid"
                                     >
                                    <form onSubmit={handleSubmit}>
                                        <label>Note: </label><br/>
                                        {/* <input type="text" name = "noteRecord" onChange={handleChange} style={{ minWidth: 400, minHeight: 50, overflow: 'auto'}} ></input> */}
                                        <br/>
                                        <TextareaAutosize aria-label="minimum height" rowsMin={10} placeholder="Enter Note Here" name = "noteRecord"onChange={handleChange} 
                                        style={{ minWidth: 600, overflow: 'auto'}}/>
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

                                <Paper style={{minHeight: 700, minWidth: 600, maxHeight: 700, overflow: 'auto', backgroundColor: '#0d0514', border: '1px solid white'}}>
                                    
                                    <List className="List">
    
                                        {allNotes.map((note)=>{
                                            return (
                                                <ListItem className="ListItem"
                                                alignItems="center">

                                                    <Grid item xs={3} className="notes-grid">

                                                        <div className="individual-note">
                                                            <div className="note-buttons">
                                                                
                                                                <div className="edit-note">
                                                                    {/* <Button onClick = {() => editNote(fakeObject)} > */}
                                                                    <Button onClick={() => onClickEdit(note.id)} id = {note.id}>

                                                                            <IconButton aria-label="create" disabled color="secondary">
                                                                                <CreateIcon />
                                                                            </IconButton>
                                                                    </Button>
                                                                    {/* <button onClick = {() => editNote(fakeObject)}>{note.noteRecord}</button> */}
                                                                </div>

                                                                <div className="timestamp-note">
                                                                    <a href="https://www.youtube.com/watch?v=ZS_kXvOeQ5Y&feature=emb_rel_pause"><p>{note.videoTimestamp}</p></a>
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
                                                                
                                                                {/* <Paper style={{maxHeight: 100, maxWidth: 575, overflow: 'auto'}}>
                                                                        <p>{note.noteRecord}</p>
                                                                    </Paper> */}


                                                                    <ExpansionPanel>
                                                                        <ExpansionPanelSummary
                                                                        expandIcon={<ExpandMoreIcon />}
                                                                        aria-controls="panel1a-content"
                                                                        id="panel1a-header"
                                                                        >
                                                                        <Typography>{(note.noteRecord).substring(0, 20) + "..."}</Typography>
                                                                        </ExpansionPanelSummary>
                                                                        <ExpansionPanelDetails>
                                                                        <Typography style={{maxWidth: 575, overflow: 'auto'}}>
                                                                            {note.noteRecord}
                                                                        </Typography>
                                                                        </ExpansionPanelDetails>
                                                                    </ExpansionPanel>
                                                            </div>
                                                        </div>

                                                    </Grid>

                                                </ListItem>

                                                )
                                            })} 
                                            {/* end of .map function */}
                                    
                                    </List>
                                </Paper>
                            </Grid>
                    </Grid>

                </Desktop>


                {/* RESPONSIVE TABLET VIEW */}
                <Tablet>
                    
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
                            item xs={12} 
                            justify="center"
                            alignItems="center" 
                            >

                                <Grid item xs={6}>
                                    
                                    <Youtube
                                        videoId = {videoUrl}
                                        // opts={opts}
                                        // onReady={videoOnReady}
                                        onPlay={videoOnPlay}
                                        onPause={videoOnPause}
                                        onStateChange={videoStateChange}
                                    />
                                    
                                </Grid>

                                <Grid item xs={12} className="form-grid"
                                     >
                                    <form onSubmit={handleSubmit}>
                                        <label>Note: </label><br/>
                                        <input type="text" name = "noteRecord" onChange={handleChange} style={{ minWidth: 400, minHeight: 50, overflow: 'auto'}} ></input>
                                        <br/>
                                        {/* <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Enter Note Here" name = "noteRecord"onChange={handleChange} 
                                        style={{ minWidth: 400, maxHeight: 200, overflow: 'auto'}}/> */}
                                        <br/>
                                        <input className="note-record" type="submit"></input>
                                        <br/>

                                    </form>
                                    <br/>
                                    <br/>

                              
                                </Grid>

                            </Grid>

                            {/* 2/2 Large Grid */}
                            <Grid className="Grid" 
                            container spacing={3}
                            item xs={12} 
                            container direction="column"
                            justify="center" 
                            alignItems="center">

                                <Paper style={{minHeight: 550, minWidth: 600, maxHeight: 550, overflow: 'auto', backgroundColor: '#0d0514', border: '1px solid white'}}>
                                    
                                    <List className="List">
    
                                        {allNotes.map((note)=>{
                                            return (
                                                <ListItem className="ListItem"
                                                alignItems="center">

                                                    <Grid item xs={3} className="notes-grid">

                                                        <div className="individual-note">
                                                            <div className="note-buttons">
                                                                
                                                                <div className="edit-note">
                                                                    <Button onClick = {() => onClickEdit(note.id)} >
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
                                                                <p>{note.videoTimestamp}</p>
                                                                <p>{note.noteRecord}</p>
                                                            </div>
                                                        </div>

                                                    </Grid>

                                                </ListItem>

                                                )
                                            })} 
                                            {/* end of .map function */}
                                    
                                    </List>
                                </Paper>

                            </Grid>
                    </Grid>

                </Tablet>

                {/* RESPONSIVE MOBILE VIEW
                <Mobile>
                <div>Mobile ?????</div>
                </Mobile> */}

            </Fragment>
        </div>

    )
}

export default SingleSessionView;