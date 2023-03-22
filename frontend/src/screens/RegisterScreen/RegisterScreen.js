import React from "react";
import "./RegisterScreen.scss";
import { Link } from "react-router-dom";
const RegisterScreen = () => {
  return (
    <div className="registerContainer">
      <form>
        <div className="form__group">
          <label htmlFor="username">UserName</label>
          <input type="text" id="username"></input>
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email"></input>
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password"></input>
        </div>
        <div className="form__group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword"></input>
        </div>

        <div className="form__group">
          <div className="form__image"></div>
          <label htmlFor="image">Profile Image</label>
          <input type="file" id="image"></input>
        </div>

        <div className="form__group">
          <input type="submit" value="Register" className="register__button" />
        </div>

        <div className="form__group">
          <span>
            <Link to="/ping/login">Log in to your account</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
