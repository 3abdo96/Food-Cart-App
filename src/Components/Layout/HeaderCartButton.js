import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [isBumb, setIsBum] = useState(false);

  const btnClasses = `${styles.button} ${isBumb ? styles.bump : ""}`;
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curValue, item) => {
    return curValue + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBum(true);

    const timer = setTimeout(() => {
      setIsBum(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
