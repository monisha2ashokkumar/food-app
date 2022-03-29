import React, { Fragment } from "react";
import classes from "./Header.module.css";
import foodImage from "../assets/foodAppImage.jpg";
import CartButton from "./CartButton";

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals on touch!!</h1>
        <CartButton onClick={props.onShowCart}></CartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="Delicious food on your plate" />
      </div>
    </Fragment>
  );
}
