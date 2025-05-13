import React from "react";
import { Link } from "react-router";
import logo from "../../assets/amazonlogo.png";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa6";
import LowerHeader from "../LowerHeader/LowerHeader.jsx";
import classes from "./Header.module.css";
import england from "../carousal/images/engl.jpeg";
import { useContext } from "react";
import { auth } from "../../util/Firebase.jsx";
import { DataContext } from "../DataProvider/DataProvider.jsx";
function Header() {
  const [{ user, basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/home">
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
            <span>
              <FaSearchengin size={16} />
            </span>
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
          <Link to={!user && "/auth"}>
            <div>
              <div>
                {user ? (
                  <>
                    <p>Hello {user.email?.split("@")[0]}</p>
                    <Link
                      to="/"
                      style={{
                        border: "1px red solid",
                        padding: "1px",
                        color: "red",
                        backgroundColor: "yellow",
                      }}
                      onClick={() => auth.signOut()}
                    >
                      Sign Out
                    </Link>
                  </>
                ) : (
                  <>
                    {" "}
                    <p>Hello, Signin</p>
                    <span>Account &Lists</span>
                  </>
                )}
              </div>
            </div>
          </Link>
          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <FaCartArrowDown size={35} /> <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
