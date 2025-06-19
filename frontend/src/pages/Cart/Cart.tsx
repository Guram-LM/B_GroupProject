// src/pages/Cart/Cart.tsx
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { clearBaskit, removeBasket } from "../../store/reduxBasket/ReduxBasket";
import styles from "./Cart.module.css";
import type { IReduxUsd } from "../../interface/Interface";

export const Cart = () => {
  const corbItem = useAppSelector((state) => state.basket.items) as IReduxUsd[];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  

  return (
    <div className={styles.container}>
      <h1 className={styles.cartTitle}>Your Cart</h1>
      {corbItem.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.itemsList}>
            {corbItem.map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.img} alt={item.name} className={styles.image} />
                <div className={styles.details}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.price}>{item.price} {item.currency ?? "GEL"}</p>
                </div>

                <div className={styles.actions}>
                  <button
                    className={styles.buyBtn}
                    onClick={() => navigate("/checkout", { state: item })}
                  >
                    Buy Now
                  </button>
                  <button
                    className={styles.removeBtn}
                    onClick={() => dispatch(removeBasket(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.clearAll}>
            <button className={styles.clearBtn} onClick={() => dispatch(clearBaskit())}>
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  );
};
