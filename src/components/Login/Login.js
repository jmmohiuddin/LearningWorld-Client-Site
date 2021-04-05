import React, { useState } from "react";
import "./Login.css";
import { UserContext } from "../../App";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  handleGoogleSignIn,
  intializeLoginFramework,
  handleSignOut,
  handleFbSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./LoginManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    newUser: false,
    name: "",
    email: "",
    photo: "",
    password: "",
  });
  intializeLoginFramework();

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handlResponse(res, true);
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handlResponse(res, true);
    });
  };
  const signOut = () => {
    handleSignOut().then((res) => {
      handlResponse(res, false);
    });
  };
  const handlResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        }
      );
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      });
    }
    e.preventDefault();
  };
  return (
    <>
      <section className=" container-md text-center loginAndSignUp mt-5">
        <div className=" container-md mt-5">
          {newUser ? <h1>Create an account</h1> : <h1>Login</h1>}
          <form onSubmit={handleSubmit}>
            {newUser && (
              <input
                type="text"
                onBlur={handleBlur}
                placeholder="Your name"
                required
                name="name"
              />
            )}
            <br />
            <input
              type="text"
              onBlur={handleBlur}
              placeholder="Your email address"
              required
              name="email"
            />
            <br />
            <input
              type="password"
              id="txtPassword"
              onBlur={handleBlur}
              name="password"
              placeholder="Your password"
              required
            />
            <br />
            {newUser && (
              <input
                id="txtConfirmPassword"
                type="password"
                onBlur={handleBlur}
                placeholder="Confirm password"
                required
                name="Confirmpassword"
              />
            )}
            <br />
            <p>
              <input type="checkbox" name="newUser" id="" />
              Remember Me
            </p>
            <br />
            <input
              type="submit"
              value={newUser ? "sign up" : "sign in"}
              className="signupSignInBtn"
            />
            <br />
            {newUser ? (
              <p></p>
            ) : (
              <b className="d-inline-block">
                Dont have an account?
                <p
                  onClick={() => setNewUser(!newUser)}
                  className="d-inline-block text-danger"
                  style={{ cursor: "pointer" }}
                >
                  Create an account
                </p>
              </b>
            )}
          </form>
          <p style={{ color: "red" }}>{user.error}</p>
          {user.success && (
            <p style={{ color: "green" }}>
              User {newUser ? "created" : "login"} successfully
            </p>
          )}
        </div>
      </section>
      <div className="text-center mt-5 GoogleFbSignIn">
        {user.isSignIn ? (
          <button onClick={signOut}>
            <FontAwesomeIcon icon={faGoogle} />
            sign out
          </button>
        ) : (
          <button onClick={googleSignIn}>
            <FontAwesomeIcon icon={faGoogle} />
            sign in With Google
          </button>
        )}
        <br />
        <button onClick={fbSignIn}>
          <FontAwesomeIcon icon={faFacebookSquare} />
          Sign in using Facebook{" "}
        </button>
      </div>
    </>
  );
}

export default Login;
