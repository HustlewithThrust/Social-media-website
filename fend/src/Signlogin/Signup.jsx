import React from 'react';
import "../Signlogin/auth.css"
import axios from "axios";
import { useRef } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Signup = () => {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history("/login");
      } catch (err) {
        console.log("unsuccess");
      }
    }
  };
  return (
    <>
      <div className="content">
        <div className="flex-div">
          <div className="name-content">
            <h1 className="logo">BeeeWing</h1>
            <p>Explore and Interact from people with your profession.</p>
          </div>
          <form className='signUp sign' onSubmit={handleClick}>

          <div class="inputbox one">
          <input
              type="text"
              ref={username}
              required="required" />
             <span>Username</span>
            <i></i>
          </div>

          <div class="inputbox two">
          <input
              type="email"
              ref={email}
              required="required" />
             <span>Email</span>
            <i></i>
          </div>

          <div class="inputbox two">
          <input
              type="password"
              ref={password}
              required="required" />
             <span>Set password</span>
            <i></i>
          </div>


            <div class="inputbox two">
          <input
              type="password"
              ref={confirmPassword}
              required="required" />
             <span>Confirm password</span>
            <i></i>
          </div>


           
<Link to="./login/signup">
            <a  className='signa'  href=''>already have an account? <span> Login here<span /></span> </a></Link>
            <hr />

            <button
              className="create-account"
               onSubmit={handleClick}
              >Create New Account</button>

          </form>
        </div>
      </div>
    </>

  )
};

export default Signup;