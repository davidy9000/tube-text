import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper'
// import image1 from 'images/image1.png';



const HomePageView = (props) => {
    
  
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

            
            <Carousel>
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

