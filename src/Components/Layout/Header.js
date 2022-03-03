import React, { Fragment } from "react";
import styles from "./Header.module.css";

import MealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={MealsImage} alt="Table Full Of Delicious Food!" />
      </div>
    </Fragment>
  );
};
export default Header;
