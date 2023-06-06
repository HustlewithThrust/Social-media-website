import { useContext, useRef } from "react";
import '../Signlogin/auth.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import { AuthContext } from "../context/AuthContext";
import { loginCall } from "../apicalls";
import { Link } from "react-router-dom";


export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (

    <div className="content">
      <div className="flex-div">
        <div className="name-content">
          <h1 className="logo">BeeeWing</h1>
          <p>Explore and Interact from people with your profession.</p>
        </div>
        <form className="loginBox log" onSubmit={handleClick}>

          <div class="inputbox one">
            <input
              ref={email}
              required="required"
              type="email" />
              <span>Email</span>

            <i></i>
          </div>

          <div class="inputbox two">
          <input
              type="password"
              ref={password}
              required="required" />
             <span>Password</span>
            <i></i>
          </div>

          <button
            className="login" type="submit" disabled={isFetching}>

            {isFetching ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Log In"
            )}

          </button>

          <hr />
          <span className="loginForgot">Forgot Password?</span>
          <Link to="./signup">
            <button className="create-account">
              Create a New Account
            </button>
          </Link>
        </form>
      </div>
    </div>

  )

}
