import React from "react";
import classes from "./LowerHeader.module.css";
function LowerHeader() {
  return (
    <div className={classes.container}>
      <ul>
        <li>All</li>
        <li>Today Deals</li>
        <li>customer services</li>
        <li>Registry</li>
        <li>Gift cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
