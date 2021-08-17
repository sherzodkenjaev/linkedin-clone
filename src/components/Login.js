import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase.js";
import Header from "./Header";
import "../styles/Login.css";
import Register from "./Register";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClicked, setIsclicked] = useState(false);

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  function handleClick() {
    setIsclicked(true);
  }

  return (
    <div>
      {!isClicked ? (
        <div className="login">
          <img src="https://www.ship.edu/contentassets/683bcb11053646978647507106ae54f2/linkedin_logo_logotype_emblem.png" />

          <form>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={loginToApp}>
              Sign In
            </button>
          </form>
          <p>
            Not a member?{" "}
            <span className="loginRegister" onClick={handleClick}>
              Register Now
            </span>
          </p>
        </div>
      ) : (
        <Register />
      )}
    </div>
  );
}

export default Login;
