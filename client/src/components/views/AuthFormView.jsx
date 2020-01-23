import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import '../styles/authFormStyles.css'

const AuthFormView = props => {
  const { name, handleSubmit, error, handleChange, isLoggedIn, displayName, userName } = props;

  return (
    <div className="login">
      {isLoggedIn ? `Current user: ${userName}` : ""}
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label className="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" onChange={handleChange} />
        </div>
        <div>
          <label className="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

export default AuthFormView;