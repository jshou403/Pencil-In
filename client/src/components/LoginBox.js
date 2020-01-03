import React from "react";

function LoginBox(props) {
  return (
    <div className="container ">
        <p>Please log in to continue</p>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          onChange={props.onChange}
          id="user-input"
          placeholder=""
        />
        <label>Password</label>
        <input
          type="text"
          className="form-control"
          onChange={props.onChange}
          id="password-input"
          placeholder=""
        />
      </div>
      <button onClick={props.onClick}>Log in</button>
    </div>
  );
}

export default LoginBox;
