import React, { useState, useContext } from "react";
import image from "../../assets/amazon.256x256 (2).ico";
import classes from "./Signup.module.css";
import Layout from "../../Components/Layout/Layout";
import { Link, useNavigate } from "react-router";
import { auth } from "../../util/Firebase";
import { Type } from "../../util/Action.type";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signin: false,
    signup: false,
  });

  const [user, dispatch] = useContext(DataContext);
  console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();

    // Assuming you have email and password state variable
    if (e.target.name == "signIn") {
      try {
        setLoading({ ...loading, signin: true });
        const userInfo = await signInWithEmailAndPassword(
          auth,

          email,
          password
        );
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        navigate("/Home");
        setLoading({ ...loading, signin: false });
      } catch (err) {
        setError(err.message);
        setLoading({ ...loading, signin: false });
      }
    } else {
      try {
        setLoading({ ...loading, signup: true });
        const userInfo = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signup: false });
      } catch (err) {
        setError(err.message);
        setLoading({ ...loading, signup: false });
      }
    }
  };
  return (
    <section className={classes.login}>
      <Link to="/home">
        <img src={image} alt="image" />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign-in</h1>
        <form action="">
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.name)}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button
            name="signIn"
            type="submit"
            onClick={authHandler}
            className={classes.signInBtn}
          >
            {loading.signin ? <ClipLoader color="blue" size={15} /> : "sign in"}
          </button>
        </form>
        <p>By signing you agree to our terms and conditions</p>
        <button
          name="signUp"
          onClick={authHandler}
          className={classes.registerButton}
        >
          {loading.signup ? <ClipLoader color="blue" size={15} /> : "sign up"}
        </button>
        {error && (
          <small className={classes.error} onChange={""}>
            {error}
          </small>
        )}
      </div>
    </section>
  );
}

export default Signup;
