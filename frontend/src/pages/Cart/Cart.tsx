import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { clearBaskit, removeBasket } from "../../store/reduxBasket/ReduxBasket";
import { updateThunk } from "../../store/update/UpdateThanks";
import styles from "./Cart.module.css";
export const Cart = () => {
  const corbItem = useAppSelector((state) => state.basket.items);
  const allAnimals = useAppSelector((state) => state.get.animals);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBuyNow = (item: typeof corbItem[number]) => {
    const fullAnimal = allAnimals.find((animal) => animal.id === item.id);
    if (!fullAnimal || !item.quantity) return;

    const originalQuantity = Number(item.quantity);

    // ✅ დამატებული შემოწმება
    if (originalQuantity <= 0) {
      console.warn("Product is out of stock, cannot buy");
      return;
    }

    const updatedQuantity = (originalQuantity - 1).toString();
    console.log(`Buying ${item.name}, new quantity will be: ${updatedQuantity}`);

    dispatch(
      updateThunk({
        id: item.id,
        resource: "animals",
        updatedData: {
          ...fullAnimal,
          quantity: updatedQuantity,
        },
      })
    )
      .unwrap()
      .then(() => {
        dispatch(removeBasket(item.id));
        navigate("/");
      })
      .catch((err) => console.error("Update failed", err));
  };

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
                  <p className={styles.price}>{item.price} GEL</p>
                </div>

                <div className={styles.actions}>
                  <button className={styles.buyBtn} onClick={() => handleBuyNow(item)}>Buy Now</button>
                  <button className={styles.removeBtn} onClick={() => dispatch(removeBasket(item.id))}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.clearAll}>
            <button className={styles.clearBtn} onClick={() => dispatch(clearBaskit())}>Clear All</button>
          </div>
        </>
      )}
    </div>
  );
};
