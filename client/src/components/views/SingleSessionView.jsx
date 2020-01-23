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
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';

// import { palette, spacing, typography } from '@material-ui/system';
// import styled from 'styled-components';
// import { unstable_Box as Box } from '@material-ui/core/Box';

import '../../singleSessionCSS.css';

// const Box = styled.div`${palette}${spacing}${typography}`;

import ReactPlayer from 'react-player';


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

const useStyles = makeStyles(theme => ({
    editButton:{
        "&:hover": {
            backgroundColor: '#cddc39',
            color: '#11153e',
        },
        textTransform: 'none',
        fontSize: '11px',
        borderRadius: 100,
        height: '20px',
        // width: '20px'
        
    }
}));

function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}

function convertToHumanReadable(aTimestamp){
    var sec_num = parseInt(aTimestamp, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
   
    return hours+':'+minutes+':'+seconds;
}

const SingleSessionView = (props) => {
    const classes = useStyles();
    const { allNotes, handleChange, handleSubmit, deleteNote, editNote, videoUrl,
            videoOnPlay, videoOnPause, thePlayer, videoSeek,
            editNoteState, onClickEdit, mustEdit,handleEditSubmit ,handleEditChange, onClickNull } = props;
    // console.log("The Hangle Change is: ", handleChange);
    return (
        <div className="overall-container">
            <Fragment>

                {/* Responsive Desktop View */}
                <Desktop>

                    <br/>
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
                                    
                                        <ReactPlayer
                                            ref = {thePlayer}
                                            url = {videoUrl}
                                            onPlay={videoOnPlay}
                                            onPause={videoOnPause}
                                            controls = {true}
                                            onSeek = {videoSeek}
                                        />
                                    
                                </Grid>
                                <br/>
                               

                                <Grid item xs={12} className="form-grid"
                                     >
                                    <form onSubmit={handleSubmit}>
                                        {/* <label>Note: </label><br/> */}
                                        {/* <input type="text" name = "noteRecord" onChange={handleChange} style={{ minWidth: 400, minHeight: 50, overflow: 'auto'}} ></input> */}
                                        {/* <br/> */}
                                        <TextareaAutosize aria-label="minimum height" rowsMin={8} placeholder="Enter Note Here" name = "noteRecord"onChange={handleChange} 
                                        style={{ minWidth: 400, width:400, overflow: 'auto'}} />
                                        <br/>
                                        <br/>
                                        <Button variant="contained" color="primary" type="submit">
                                            Add Note
                                        </Button>
                                        {/* <input className="note-record" type="submit"></input> */}

                                    </form>

                                </Grid>

                                <br/>
                                <br/>

                                <Grid item>
                                    <Badge badgeContent={allNotes.length} color="error">
                                        <DescriptionIcon />
                                    </Badge>
                                </Grid>
                                <br/>

                            </Grid>

                            {/* 2/2 Large Grid */}
                            <Grid className="Grid" 
                            container spacing={3}
                            item xs={6} 
                            container direction="column"
                            justify="center" 
                            alignItems="center">   

                                <Paper style={{minHeight: 650, minWidth: 600, maxHeight: 650, overflow: 'auto', backgroundColor: '#f0f0f5', border: '1px solid white'}}>

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
                                                                    {/* <Button onClick = {() => videoSeek(note.videoTimestamp)}>{convertToHumanReadable(note.videoTimestamp)}</Button> */}
                                                                    <Button variant="contained" color="primary" onClick = {() => videoSeek(note.videoTimestamp)} className="timestamp-button">
                                                                        {convertToHumanReadable(note.videoTimestamp)}
                                                                    </Button>
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
                                                                {
                                                                    (mustEdit === note.id)
                                                                    ? 
                                                                    <form onSubmit={handleEditSubmit}>
                                                                        <TextareaAutosize aria-label="minimum height" rowsMin={10} name = "noteRecord"onChange={handleEditChange} style={{ minWidth: 520, overflow: 'auto'}}>{note.noteRecord}</TextareaAutosize>

                                                                        {/* <Button className = {classes.editButton} onClick={handleEditSubmit}>Submit</Button> */}
                                                                        <input className="note-record" type="submit"></input>
                                                                        <button onClick={onClickNull}>Cancel</button>
                                                                    </form>
                                                                    : <ExpansionPanel>
                                                                        <ExpansionPanelSummary
                                                                        expandIcon={<ExpandMoreIcon />}
                                                                        aria-controls="panel1a-content"
                                                                        id="panel1a-header"
                                                                        >
                                                                        <Typography style={{fontWeight: 'bold'}}>{(note.noteRecord).substring(0, 20) + "..."}</Typography>
                                                                        </ExpansionPanelSummary>
                                                                        <ExpansionPanelDetails>
                                                                        <Typography style={{maxWidth: 575, overflow: 'auto'}}>
                                                                            {note.noteRecord}
                                                                        </Typography>
                                                                        </ExpansionPanelDetails>
                                                                      </ExpansionPanel>
                                                                }
                                                                {/* <Paper style={{maxHeight: 100, maxWidth: 575, overflow: 'auto'}}>
                                                                        <p>{note.noteRecord}</p>
                                                                    </Paper> */}
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
                    
                    <br/>
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
                                    
                                    <ReactPlayer
                                        ref = {thePlayer}
                                        url = {videoUrl}
                                        onPlay={videoOnPlay}
                                        onPause={videoOnPause}
                                        controls = {true}
                                        onSeek = {videoSeek}
                                        width={400}
                                        height={300}
                                    />
                                    
                                </Grid>
                                
                                <br/>

                                <Grid item xs={12} className="form-grid"
                                     >
                                    <form onSubmit={handleSubmit}>
                                        <br/>
                                        <TextareaAutosize aria-label="minimum height" rowsMin={8} placeholder="Enter Note Here" name = "noteRecord"onChange={handleChange} 
                                        style={{ minWidth: 400, width:400, overflow: 'auto'}}/>
                                        <br/>
                                        <br/>
                                        <Button variant="contained" color="primary" type="submit">
                                            Add Note
                                        </Button>
                                        <br/>

                                    </form>
                                    <br/>
                                    <br/>


                              
                                </Grid>

                                <br/>

                                <Grid item>
                                    <Badge badgeContent={allNotes.length} color="error">
                                        <DescriptionIcon />
                                    </Badge>
                                </Grid>
                                <br/>
                                <br/>

                            </Grid>

                            {/* 2/2 Large Grid */}
                            <Grid className="Grid" 
                            container spacing={3}
                            item xs={12} 
                            container direction="column"
                            justify="center" 
                            alignItems="center">
                                
                                <Paper style={{minHeight: 550, minWidth: 600, maxHeight: 550, overflow: 'auto', backgroundColor: '#f0f0f5', border: '1px solid white'}}>
                                    
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

                                                                <div className="timestamp-note">
                                                                    {/* <Button onClick = {() => videoSeek(note.videoTimestamp)}>{note.videoTimestamp}</Button> */}
                                                                    <Button variant="contained" color="primary" onClick = {() => videoSeek(note.videoTimestamp)} className="timestamp-button">
                                                                        {convertToHumanReadable(note.videoTimestamp)}
                                                                    </Button>
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
                                                            {
                                                                    (mustEdit === note.id)
                                                                    ? 
                                                                    <form onSubmit={handleEditSubmit}>
                                                                        <TextareaAutosize aria-label="minimum height" rowsMin={10} name = "noteRecord"onChange={handleEditChange} style={{ minWidth: 520, overflow: 'auto'}}>{note.noteRecord}</TextareaAutosize>
                                                                        {/* <Button className = {classes.editButton} onClick={handleEditSubmit}>Submit</Button> */}
                                                                        <input className="note-record" type="submit"></input>
                                                                        <button onClick={onClickNull}>Cancel</button>
                                                                    </form>
                                                                    : <ExpansionPanel>
                                                                        <ExpansionPanelSummary
                                                                        expandIcon={<ExpandMoreIcon />}
                                                                        aria-controls="panel1a-content"
                                                                        id="panel1a-header"
                                                                        >
                                                                        <Typography style={{fontWeight: 'bold'}}>{(note.noteRecord).substring(0, 20) + "..."}</Typography>
                                                                        </ExpansionPanelSummary>
                                                                        <ExpansionPanelDetails>
                                                                        <Typography style={{maxWidth: 575, overflow: 'auto'}}>
                                                                            {note.noteRecord}
                                                                        </Typography>
                                                                        </ExpansionPanelDetails>
                                                                      </ExpansionPanel>
                                                                }
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