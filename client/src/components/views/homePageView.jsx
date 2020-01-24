import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper'


const HomePageView = (props) => {
    
  
    // const { allNotes, handleChange, handleSubmit, deleteNote, editNote, videoUrl,
    //     videoOnPlay, videoOnPause, thePlayer, videoSeek,
    //     editNoteState, onClickEdit, mustEdit,handleEditSubmit ,handleEditChange, onClickNull } = props;

    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ];

       
        
    
    return (

      
        <div>
            <Carousel>
                {
                    items.map((item) => {
                        return(
                        <div>{item.name}</div>
                        )
                    })
                }
            </Carousel>
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

