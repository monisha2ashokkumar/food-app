import classes from "./FoodItem.module.css";
import FoodForm from "./FoodForm";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

export default function FoodItem(props) {
  const cartCtxt = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    console.log('Adding item call onAddToCartHandler')
    cartCtxt.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodForm id={props.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
}
