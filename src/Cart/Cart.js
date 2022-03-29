import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtxt = useContext(CartContext);
  const amountTotal = `$${cartCtxt.totalAmount.toFixed(2)}`;
  const onRemoveHandler = (id) => {
    cartCtxt.removeItem(id);
  };
  const onAddHandler = (item) => {
    cartCtxt.addItem({...item, amount:1});
  };
  const hasItems = cartCtxt.items.length > 0;

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCtxt.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={onRemoveHandler.bind(null, item.id)}
          onAdd={onAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  //same props.onClose is called for both close and backdrop function call
  return (
    <Modal onBackdropClick={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{amountTotal}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
