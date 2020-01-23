import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import '../styles/authFormStyles.css'

import { Link } from 'react-router-dom';
import '../styles/newStudySessionStyle.css'
import Button from '@material-ui/core/Button';


const AuthFormView = props => {
  const { name, handleSubmit, error, handleChange, isLoggedIn, displayName, userName } = props;

  return (
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
  );
};

export default AuthFormView;
