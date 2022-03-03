import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [formIsValid, setFormIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmountNumber < 0 ||
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5
    ) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={styles.button}>+ Add</button>
      {!formIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};
export default MealItemForm;
