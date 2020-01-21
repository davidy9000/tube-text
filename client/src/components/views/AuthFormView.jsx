import React from "react";

const AuthFormView = props => {
  const { name, handleSubmit, error, handleChange, isLoggedIn, displayName, userName } = props;

  return (
    <div>
      {isLoggedIn ? `The current logged in user is: ${userName}` : ""}
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">
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