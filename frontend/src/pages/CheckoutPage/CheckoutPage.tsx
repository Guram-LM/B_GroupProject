import { useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import styles from "./CheckoutPage.module.css";
import type { IItems } from "../../interface/Interface";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { updateThunk } from "../../store/update/UpdateThanks";
import { removeBasket } from "../../store/reduxBasket/ReduxBasket";
import { toast } from "react-toastify";

export const CheckoutPage = () => {

  const { mode } = useOutletContext<{ mode: "light" | "dark" }>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state as IItems & { currency?: "GEL" | "USD" }
;

  const allAnimals = useAppSelector((state) => state.get.animals);

  const reduciren = (item: IItems) => {
  const fullAnimal = allAnimals.find((animal) => animal.id === item.id);
  if (!fullAnimal || !item.quantity) return;

  const availableQuantity = Number(fullAnimal.quantity);
  const quantityToBuy = Number(item.quantity);

  if (availableQuantity < quantityToBuy) {
    console.warn("არ არის საკმარისი რაოდენობა საწყობში");
    return;
  }

  const updatedQuantity = (availableQuantity - quantityToBuy).toString();

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
      navigate("/erfolgPage");
    })
    .catch((err) => console.error("Update failed", err));
};


const [paymentMethod, setPaymentMethod] = useState("");
const [deliveryMethod, setDeliveryMethod] = useState("");

const onBuyClick = () => {
  if (!paymentMethod) return toast.info("გთხოვთ აირჩიოთ გადახდის მეთოდი");
  if (!deliveryMethod) return toast.info("გთხოვთ აირჩიოთ მიწოდების მეთოდი");
  reduciren(item)
};

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>გადახდა</h1>

      <div className={styles.formSection}>
        <div className={styles.selectGroup}>
          <label>გადახდის მეთოდი</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">აირჩიეთ</option>
            <option value="direct">პირდაპირი გადახდა</option>
            <option value="card">ბარათით გადახდა</option>
          </select>
        </div>

        <div className={styles.selectGroup}>
          <label>მიწოდების მეთოდი</label>
          <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)}>
            <option value="">აირჩიეთ</option>
            <option value="address">მისამართზე მიტანა</option>
            <option value="pickup">ადგილზე აღება</option>
          </select>
        </div>
      </div>

      <h2 className={styles.subTitle}>არჩეული პროდუქტი</h2>
      <div className={`${styles.itemsContainer} ${mode === "dark" ? styles.cardLight : styles.cardDark}`}>
        <div key={item.id} className={styles.itemCard}>
          <img src={item.img} alt={item.name} className={styles.itemImage} />
          <div className={styles.itemInfo}>
            <p>{item.name}</p>
            <p>რაოდენობა: {item.quantity}</p>
            <p>ფასი: {item.price} {item.currency ?? "₾"}</p>
          </div>
        </div>
      </div>

      <button
        className={styles.buyButton}
        onClick={onBuyClick }
      >
        ყიდვა
      </button>
      <button
        className={styles.cancelButton}
        onClick={() => {
        dispatch(removeBasket(item.id)); 
        navigate("/");
        }}
        >
            გაუქმება
        </button>
    </div>
  );
};
