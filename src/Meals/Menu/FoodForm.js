import classes from "./FoodForm.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

export default function FoodForm(props) {
  const itemRef = useRef();
  const [amountEnteredIsValid, setAmountEnteredIsValid] = useState(true);
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = itemRef.current.value; //always comes in string format even though the of hte entered amount is number type
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountEnteredIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={itemRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <Button className={classes.button}> + Add item</Button>
      {!amountEnteredIsValid && <p>Invalid amount!! Enter amount in the range from 1 to 5</p>}
    </form>
  );
}
