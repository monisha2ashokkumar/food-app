import React, { Fragment, useContext, useState, useEffect } from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";

export default function CartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const noOfItems = cartContext.items.reduce((curAmount, item) => {
    return curAmount + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Fragment>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{noOfItems}</span>
      </button>
    </Fragment>
  );
}
