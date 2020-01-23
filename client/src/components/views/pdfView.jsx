import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import '../../singleSessionCSS.css';

class PdfView extends Component {
    
    // const {allNotes, videoSeek} = props;

    constructor(props) {
        super(props)
    }

    convertToHumanReadable(aTimestamp){
        var sec_num = parseInt(aTimestamp, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
       
        return hours+':'+minutes+':'+seconds;
    }

    exportPDF = () => {
        this.resume.save();
    }



    renderContent = () => {
        console.log(this.props.allNotes);
        return this.props.allNotes.map(note => <div>hello</div>)
    }
    
    render () {
        const {allNotes, videoSeek, currStudySession} = this.props;
    
        return (
            <div>
                <Grid container
                    justify="center"
                    alignItems="center" 
                    >
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={this.exportPDF} className="timestamp-button">
                            Download
                        </Button>

                    </Grid>
                </Grid>
                <br/>


                <PDFExport paperSize={'Letter'}
                    fileName={"TubeText_Study_Session"+".pdf"}
                    title=""
                    subject=""
                    keywords=""
                    paperSize="Letter"
                    ref={(r) => this.resume = r}>
                        <div style={{
                            height: 792,
                            width: 612,
                            padding: 'none',
                            backgroundColor: 'white',
                            boxShadow: '5px 5px 5px black',
                            margin: 'auto',
                            overflowX: 'hidden',
                            overflowY: 'hidden'}}>
                                {/* <div style={{backgroundColor: 'black', color: 'white'}}>
                                {this.renderContent()}
                                </div> */}

                            <Grid container>

                                
                                <Paper style={{minHeight: 792, minWidth: 600, maxHeight: 792, overflow: 'auto', backgroundColor: '#f0f0f5', border: '1px solid white'}}>
                                    
                                    <List className="List">

                                        {this.props.allNotes.map((note)=>{
                                            return (
                                                <ListItem className="ListItem"
                                                alignItems="center">

                                                    <Grid item xs={3} className="notes-grid">

                                                        <div className="individual-note">
                                                            <div className="note-buttons">
                                                                


                                                                <div className="timestamp-note" style={{margin: '10px'}}>
                                                                    {/* <Button onClick = {() => videoSeek(note.videoTimestamp)}>{note.videoTimestamp}</Button> */}
                                                                    <Button variant="contained" color="primary" onClick = {() => this.props.videoSeek(note.videoTimestamp)} className="timestamp-button">
                                                                        {this.convertToHumanReadable(note.videoTimestamp)}
                                                                    </Button>
                                                                </div>

                    
                                                            </div>
                                                            <div className="note-record">
                                                            
                                                                {/* <ExpansionPanel>
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
                                                                    </ExpansionPanel> */}

                                                                        <Typography style={{maxWidth: 575, overflow: 'auto', backgroundColor: 'white', padding: '10px'}}>
                                                                            {note.noteRecord}
                                                                        </Typography>
                                                                
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


                        </div>
                </PDFExport>
            </div>
            
        );
    }
}

export default PdfView;