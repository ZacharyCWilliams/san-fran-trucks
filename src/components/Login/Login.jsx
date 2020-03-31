import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { loginNow } from "../../App";
import "./Login.css";

const loginUser = async (username, password) => {
  try {
    const res = await axios.post("http://localhost:3001/api/users/login", {
      username: username,
      password: password
    });

    return res;
  } catch (error) {
    return false;
  }
};

function Login({ loggedInTest, setLoggedInTest }) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const history = useHistory();

  const handleLoginSubmit = async e => {
    e.preventDefault();
    try {
      if (loginUsername !== "") {
        let loggedIn = await loginUser(loginUsername, loginPass);
        if (loggedIn) setLoggedInTest(true);
        if (loggedIn) history.push("/");
        if (!loggedIn) history.push("/login");
      }
    } catch (error) {
      console.log("error", error);
    }
    setLoginUsername("");
    setLoginPass("");
  };

  return (
    <div className="login-form-page">
      <form className="login-form" onSubmit={e => handleLoginSubmit(e)}>
        <div className="username-input">
          <label className="login-label offset">USERNAME</label>
          <input
            className="form-input"
            value={loginUsername}
            onChange={e => setLoginUsername(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label className="login-label">PASSWORD</label>
          <input
            className="form-input"
            value={loginPass}
            onChange={e => setLoginPass(e.target.value)}
            type="password"
            name="password"
          />
        </div>
        <div>
          <input className="login-button" type="submit" value="LOGIN" />
        </div>
        <Link className="register-link" to="/register">
          Create Account
        </Link>
      </form>
    </div>
  );
}

export default Login;
