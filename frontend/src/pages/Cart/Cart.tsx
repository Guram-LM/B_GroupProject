import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { clearBaskit, removeBasket } from "../../store/reduxBasket/ReduxBasket";
import styles from "./Cart.module.css";


export const Cart = () => {
  const cartItems = useAppSelector(state => state.basket.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/checkout"); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.cartTitle}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.itemsList}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.card}>
                <img src={item.img} alt={item.name} className={styles.image} />
                <div className={styles.details}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.price}>{item.price} GEL</p>
                </div>
                <div className={styles.actions}>
                  <button
                    className={styles.buyBtn}
                    onClick={handleBuy}
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
            <button
              onClick={() => dispatch(clearBaskit())}
              className={styles.clearBtn}
            >
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  );
};
