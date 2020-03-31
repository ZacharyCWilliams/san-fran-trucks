import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

const registerUser = async (username, password) => {
  try {
    await axios.post("http://localhost:3001/api/users", {
      username: username,
      password: password
    });
  } catch (error) {
    let errorMessage = error.response.data;
    return { error: errorMessage, serverResponse: false };
  }
};


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterSubmit = e => {
    e.preventDefault();
    let register = registerUser(username, password);
    if (register) {
      window.location.replace("/");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-form-page">
      <form className="login-form" onSubmit={e => handleRegisterSubmit(e)}>
        <div className="username-input">
          <label className="login-label">USERNAME</label>
          <input
            className="form-input"
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label className="login-label">PASSWORD</label>
          <input
            className="form-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
          />
        </div>
        <div>
          <input className="login-button" type="submit" value="CREATE" />
        </div>
        <Link className="register-link" to="/login">
          I already have an account!
        </Link>
      </form>
    </div>
  );
}

export default Register;
