import React from 'react';
import { Link } from 'react-router-dom';

const SingleSessionView = (props) => {
    const {allNotes, addNotesThunk} = props;

    handleSubmit = (event) => {
        event.preventDefault();

        //  create key:values for new object
        const id=this.getID.value;
        const studySessionId = this.studySessionId.value;
        const lastName = this.getLastName.value;
        const email = this.getEmail.value;
        

        //  creates object
        const data = {
            id,
            firstName,
            lastName,
            email,
            gpa,
            imageUrl,
            createdAt: new Date(),
            updatedAt: new Date(),
            campusId
        }

        //  dispatches object of Student
        this.props.dispatch({
            type:'ADD_STUDENT',
            payload: data
        });

        //  clears forms of recently entered values
        this.getFirstName.value = '';
        this.getLastName.value = '';
        this.getEmail.value = '';
        this.getGPA.value = '';
        this.getID.value = '';

        this.props.history.push("/students");
    }

    // addNotesThunk()
    return (
        <div className="App">
            {allNotes.map((notes)=>{
            return <p>{notes.noteRecord}</p>
            })}

            <form>
                {/* Temporary Study Session field */}
                Study Session: <input type="text" name="studySessionId"></input>
                <br/>
                {/* Temporary TimeStamp field */}
                TimeStamp: <input type="text" name="timeStamp"></input>
                <br/>
                Note: <input type="text" name="note"></input>
                <br/>
                <input type="submit" onSubmit={addNotesThunk()}></input>

            </form>
            
        </div>

    )
}

export default SingleSessionView;