import React from "react";
import { Link } from "react-router";
import logo from "../../assets/amazonlogo.png";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa6";
import LowerHeader from "../LowerHeader/LowerHeader.jsx";
import classes from "./Header.module.css";
import england from "../carousal/images/engl.jpeg";
function Header() {
  return (
    <>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/">
            <img src={logo} alt="amazon logo" />
          </Link>
          <div className={classes.delivery}>
            <Link to="">
              <span></span>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </Link>
          </div>
        </div>
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <Link to="">
            <span>search </span>
          </Link>
        </div>
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img src={england} alt="England" />
          </Link>{" "}
          <select name="" id="">
            <option value="">EN</option>
            <option value="">FR</option>
            <option value="">SP</option>
          </select>
          <Link to="">
            <div>
              <p>Sign In</p>
              <span>Account &Lists</span>{" "}
            </div>
          </Link>
          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <FaCartArrowDown size={35} /> <span>0</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
