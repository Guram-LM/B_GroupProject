import React from "react";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>
      <p>Here you can review your order and proceed with the payment.</p>

      {}
    </div>
  );
};

export default CheckoutPage;
