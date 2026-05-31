import React, { useState, useContext } from "react";
import image from "../../assets/amazon.256x256 (2).ico";
import classes from "./Signup.module.css";
import { Link, useNavigate } from "react-router";
import { auth } from "../../util/Firebase";
import { Type } from "../../util/Action.type";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState({
    signin: false,
    signup: false,
  });

  const [user, dispatch] = useContext(DataContext);
  console.log(user);

  const handleAuth = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        setLoading({ ...loading, signin: true });
        const userInfo = await signInWithEmailAndPassword(
          auth,

          email,
          password,
        );
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        navigate("/home");
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
          password,
        );
        await updateProfile(userInfo.user, {
          displayName: name,
        });
        console.log(userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signup: false });
        navigate("/home");
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
        <h1>{isLogin ? "Sign-In" : "Create Account"}</h1>
        <form onSubmit={handleAuth}>
          {!isLogin && (
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
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
          <button type="submit" className={classes.signInBtn}>
            {isLogin ? (
              loading.signin ? (
                <ClipLoader color="orange" size={15} />
              ) : (
                "Sign In"
              )
            ) : loading.signup ? (
              <ClipLoader color="orange" size={15} />
            ) : (
              "Create your Amazon Account"
            )}
          </button>
        </form>
        <p>By signing you agree to our terms and conditions</p>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className={classes.registerButton}
        >
          {isLogin
            ? "Create your Amazon Account"
            : "Already have an account? Sign In"}
        </button>
        {error && <small className={classes.error}>{error}</small>}
      </div>
    </section>
  );
}

export default Signup;
