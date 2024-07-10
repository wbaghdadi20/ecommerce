import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase login
  };
  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <button type="submit" className="login-signIn-btn" onClick={signIn}>
          Sign In
        </button>

        <p>
          By signing-in you agree to Amazon Conditinons of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and out Interest-Based Ads
          Notice
        </p>

        <button type="submit" className="login-regiser-btn" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
