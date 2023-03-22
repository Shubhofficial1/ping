import React from "react";
import "./LoginScreen.scss";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="loginContainer">
      <form>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email"></input>
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password"></input>
        </div>

        <div className="form__group">
          <input type="submit" value="Login" className="login__button" />
        </div>

        <div className="form__group">
          <span>
            <Link to="/ping/register">Register your account</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
