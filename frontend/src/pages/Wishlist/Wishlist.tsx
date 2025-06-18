import { useAppDispatch, useAppSelector } from "../../store/hook";
import { clearWishlist, removeWishlist } from "../../store/redaxwishlist/redaxwishlist";
import { addBasket } from "../../store/reduxBasket/ReduxBasket";
import styles from "./Wishlist.module.css";

export const Wishlist = () => {
  const wishlistItems = useAppSelector(state => state.wishlist.items);
  const dispatch = useAppDispatch();

  const moveToCart = (item: typeof wishlistItems[0]) => {
    dispatch(addBasket(item));
    dispatch(removeWishlist(item.id));
  };

  return (
    <div className={styles.container}>
<h1 className={styles.wishlistTitle}>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your wishlist is empty.</p>
      ) : (
        <>
          <div className={styles.itemsList}>
            {wishlistItems.map(item => (
              <div key={item.id} className={styles.card}>
                <img src={item.img} alt={item.name} className={styles.image} />
                <div className={styles.details}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.price}>{item.price} GEL</p>
                </div>
                <div className={styles.actions}>
                  <button
                    className={styles.moveBtn}
                    onClick={() => moveToCart(item)}
                  >
                    Move to Cart
                  </button>
                  <button
                    className={styles.removeBtn}
                    onClick={() => dispatch(removeWishlist(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.clearAll}>
            <button onClick={() => dispatch(clearWishlist())} className={styles.clearBtn}>
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  );
};
