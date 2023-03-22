import React, { useState } from "react";
import "./RegisterScreen.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actions/userActions";
const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length !== 0) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    }
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { userName, email, password, confirmPassword, image } = formData;

    const datam = new FormData();

    datam.append("userName", userName);
    datam.append("email", email);
    datam.append("password", password);
    datam.append("confirmPassword", confirmPassword);
    datam.append("image", image);

    dispatch(register(datam));
  };

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form__group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form__group">
          <div className="form__image">
            {imagePreview ? (
              <img src={imagePreview} alt="profileImage"></img>
            ) : null}
          </div>
          <label htmlFor="image">Profile Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
          ></input>
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
