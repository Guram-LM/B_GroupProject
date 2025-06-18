import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { featchAnimals } from "../../store/get/getThunks";
import { Link, useOutletContext } from "react-router-dom";
import styles from "./style.module.css"
import { useconverter } from "../../hook/ConverterHook";
import { addBasket } from "../../store/reduxBasket/ReduxBasket";
import { addWishlist } from "../../store/redaxwishlist/redaxwishlist";
import SliderComponent from "../../sliderComponent/sliderComponent";
import type { IItems } from "../../interface/Interface";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";



export const HomePage =() => {

    const {animals,error,loading}=useAppSelector(state => state.get)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(featchAnimals({resource:"animals"}))
    },[dispatch])


    const { rate } = useconverter()
    const [curensy, setCurensy] = useState<"GEL" | "USD" >("GEL")


    const { mode } = useOutletContext<{ mode: "light" | "dark" }>();

   
    if (loading) return <h1>Loading ...</h1>;
    if (error) return <h1>{error}</h1>;
    return (
    <div className={`${styles.container} ${mode === "dark" ? styles.dark : styles.light}`}>

      <SliderComponent animals={animals.filter(a => a.img) as IItems[]}/>
      <div className={styles.headerWithSelect}>
        <h1 className={styles.pageHeader}>Our Pets</h1>
        <select value={curensy} onChange={(e) => setCurensy(e.target.value as "GEL" | "USD")} className={styles.customSelect}>
          <option value="GEL">GEL</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <div className={styles.grid}>
        {animals.map(item => {
          const priceInUSD = rate ? (Number(item.price) * rate).toFixed(2) : null;
          return (
            <div key={item.id} className={`${styles.card} ${mode === "dark" ? styles.cardLight : styles.cardDark} ${item.quantity === "0" ? styles.outOfStock : ""}`}>
              <div className={styles.imageBox}>
                <img src={item.img} alt={item.name} />
                {item.quantity === "0" && <p className={styles.outOfStockText}>Out of Stock</p>}
              </div>

              <div className={styles.detailsSeqtion}>
                <div className={styles.details}>
                  <p>{item.name}</p>
                  {curensy === "USD" && rate
                    ? <p>USD {priceInUSD}</p>
                    : <p>GEL {item.price}</p>
                  }
                </div>

                <div className={styles.actions}>
                  <Link className={styles.detailsButton} to={`/animal/${item.id}`} >Details </Link>
                  <div className={styles.icons}>
                    <AiOutlineHeart
                      className={`${styles.icon} ${styles.heart}`}
                      onClick={() => {dispatch(addWishlist({ ...item, id: item.id! }));
                     toast.success("Add to wishlist") }}
                    />
                    <AiOutlineShoppingCart
                      className={`${styles.icon} ${styles.cart}`}
                      onClick={() => {dispatch(addBasket({ ...item, id: item.id! }));
                    toast.success("Add to Card")}}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};